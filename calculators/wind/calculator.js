(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.WindCalculator = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const toRadians = degrees => degrees * Math.PI / 180;
  const toDegrees = radians => radians * 180 / Math.PI;
  const normalizeHeading = degrees => ((degrees % 360) + 360) % 360;

  function parseMetarWind(input) {
    const normalized = String(input || "").toUpperCase().replace(/\s+/g, " ").trim();
    const match = normalized.match(/(?:^|\s)(\d{3}|VRB)(\d{2,3})(?:G(\d{2,3}))?KT(?:\s|$)/);

    if (!match) {
      throw new Error("Enter a METAR wind group such as 24012KT or 24012G20KT.");
    }

    const direction = match[1] === "VRB" ? null : Number(match[1]);
    const speed = Number(match[2]);
    const gust = match[3] ? Number(match[3]) : null;

    if (direction !== null && (direction < 0 || direction > 360)) {
      throw new Error("Wind direction must be from 000° through 360°.");
    }
    if (gust !== null && gust < speed) {
      throw new Error("The gust speed cannot be lower than the sustained wind speed.");
    }
    if (direction === null && speed > 0) {
      throw new Error("VRB wind has no single direction, so a unique correction cannot be calculated.");
    }

    return { direction: direction === 360 ? 0 : direction, speed, gust, group: match[0].trim() };
  }

  function solveWind(course, airspeed, windDirection, windSpeed) {
    const track = normalizeHeading(Number(course));
    const tas = Number(airspeed);
    const wind = Number(windSpeed);

    if (!Number.isFinite(Number(course)) || Number(course) < 0 || Number(course) > 360) {
      throw new Error("Approach course must be between 0° and 360°.");
    }
    if (!Number.isFinite(tas) || tas <= 0) {
      throw new Error("Approach speed must be greater than zero.");
    }
    if (!Number.isFinite(wind) || wind < 0) {
      throw new Error("Wind speed cannot be negative.");
    }

    const relative = toRadians(normalizeHeading(windDirection - track));
    const headwind = wind * Math.cos(relative);
    const crosswind = wind * Math.sin(relative);
    const ratio = crosswind / tas;

    if (Math.abs(ratio) > 1) {
      throw new Error("The crosswind exceeds the entered airspeed; this track cannot be maintained in the simplified model.");
    }

    const correction = toDegrees(Math.asin(ratio));
    const heading = normalizeHeading(track + correction);
    const groundspeed = tas * Math.cos(toRadians(correction)) - headwind;

    if (groundspeed <= 0) {
      throw new Error("The calculated groundspeed is zero or negative; the selected track cannot be maintained.");
    }

    return { track, correction, heading, groundspeed, headwind, crosswind };
  }

  function calculate(input) {
    const wind = parseMetarWind(input.wind);
    const direction = wind.direction === null ? 0 : wind.direction;
    const sustained = solveWind(input.course, input.airspeed, direction, wind.speed);
    const gust = wind.gust === null ? null : solveWind(input.course, input.airspeed, direction, wind.gust);
    return { wind, sustained, gust };
  }

  return { parseMetarWind, solveWind, calculate, normalizeHeading };
});
