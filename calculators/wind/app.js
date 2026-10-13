(function () {
  "use strict";

  const form = document.querySelector("#wind-form");
  const error = document.querySelector("#error");
  const results = document.querySelector("#results");
  const gustPanel = document.querySelector("#gust-panel");

  const rounded = value => Math.round(value);
  const heading = value => `${String(rounded(WindCalculator.normalizeHeading(value)) || 360).padStart(3, "0")}°`;
  const correctionText = value => {
    if (Math.abs(value) < 0.5) return "No crab required";
    return `${Math.abs(rounded(value))}° ${value > 0 ? "right" : "left"}`;
  };
  const componentText = (value, positiveLabel, negativeLabel) => {
    if (Math.abs(value) < 0.5) return "Calm / negligible";
    return `${Math.abs(rounded(value))} kt ${value >= 0 ? positiveLabel : negativeLabel}`;
  };

  function display(data) {
    const sustained = data.sustained;
    document.querySelector("#correction-summary").textContent = correctionText(sustained.correction);
    document.querySelector("#corrected-heading").textContent = heading(sustained.heading);
    document.querySelector("#groundspeed").textContent = `${rounded(sustained.groundspeed)} kt`;
    document.querySelector("#longitudinal").textContent = componentText(sustained.headwind, "headwind", "tailwind");
    document.querySelector("#crosswind").textContent = componentText(sustained.crosswind, "from right", "from left");
    document.querySelector("#wind-parsed").textContent = data.wind.group;

    if (data.gust) {
      document.querySelector("#groundspeed-note").textContent = `Sustained; ${rounded(data.gust.groundspeed)} kt at gust`;
      document.querySelector("#gust-correction").textContent = correctionText(data.gust.correction);
      document.querySelector("#gust-heading").textContent = heading(data.gust.heading);
      document.querySelector("#gust-groundspeed").textContent = `${rounded(data.gust.groundspeed)} kt`;
      gustPanel.hidden = false;
    } else {
      document.querySelector("#groundspeed-note").textContent = "Sustained wind";
      gustPanel.hidden = true;
    }

    error.hidden = true;
    results.hidden = false;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    try {
      const data = WindCalculator.calculate({
        course: Number(form.elements.course.value),
        airspeed: Number(form.elements.airspeed.value),
        wind: form.elements.wind.value
      });
      display(data);
    } catch (problem) {
      results.hidden = true;
      error.textContent = problem.message;
      error.hidden = false;
    }
  });

  form.requestSubmit();
})();
