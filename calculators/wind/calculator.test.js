"use strict";

const assert = require("node:assert/strict");
const { parseMetarWind, solveWind, calculate } = require("./calculator.js");

assert.deepEqual(parseMetarWind("24012G20KT"), {
  direction: 240,
  speed: 12,
  gust: 20,
  group: "24012G20KT"
});

assert.equal(parseMetarWind("KJFK 121651Z 18010KT 10SM CLR").direction, 180);
assert.throws(() => parseMetarWind("VRB08KT"), /no single direction/);
assert.throws(() => parseMetarWind("24020G12KT"), /gust speed/);

const directHeadwind = solveWind(180, 70, 180, 10);
assert.ok(Math.abs(directHeadwind.correction) < 0.001);
assert.ok(Math.abs(directHeadwind.groundspeed - 60) < 0.001);
assert.ok(Math.abs(directHeadwind.headwind - 10) < 0.001);

const directTailwind = solveWind(180, 70, 0, 10);
assert.ok(Math.abs(directTailwind.groundspeed - 80) < 0.001);
assert.ok(Math.abs(directTailwind.headwind + 10) < 0.001);

const rightCrosswind = solveWind(360, 100, 90, 20);
assert.ok(Math.abs(rightCrosswind.correction - 11.536959) < 0.0001);
assert.ok(Math.abs(rightCrosswind.groundspeed - 97.97959) < 0.0001);

const withGust = calculate({ course: 180, airspeed: 70, wind: "24012G20KT" });
assert.equal(withGust.wind.gust, 20);
assert.ok(withGust.gust.correction > withGust.sustained.correction);

console.log("Wind calculator tests passed.");
