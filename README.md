<div align="center">

![General aviation cockpit in VFR flight with a checklist on a kneeboard](assets/readme-banner.png)

# Flight Checklists

**A version-controlled library of general-aviation checklists, cockpit flows, and planning aids.**

[![Markdown](https://img.shields.io/badge/format-Markdown-000000?logo=markdown)](https://www.markdownguide.org/)
[![Last commit](https://img.shields.io/github/last-commit/marpa96/Flight-Checklists)](https://github.com/marpa96/Flight-Checklists/commits/main)
[![Repository size](https://img.shields.io/github/repo-size/marpa96/Flight-Checklists)](https://github.com/marpa96/Flight-Checklists)

[Browse checklists](#checklist-library) · [Use the template](#create-a-checklist) · [Contribute](#contributing)

</div>

> [!WARNING]
> **For reference and personal organization only.** These checklists are not a substitute for an approved Pilot's Operating Handbook (POH), Aircraft Flight Manual (AFM), manufacturer checklist, Airworthiness Directive, regulation, instructor guidance, or sound pilot judgment. Verify every checklist against the documents and procedures applicable to the specific aircraft and operation before use.

## About This Repository

This project keeps flight-related procedures readable, portable, and easy to improve. Markdown provides a clean rendered view on GitHub while preserving simple text files that can be reviewed through version history, copied into other tools, or printed for use away from the computer.

The library is intended to support:

- Pre-flight planning and personal equipment preparation
- Phase-of-flight flows and verification checklists
- Consistent formatting across aircraft and operations
- Transparent review of procedural changes through Git
- Reusable templates for creating new checklists

## Table of Contents

- [Checklist Library](#checklist-library)
- [Quick Start](#quick-start)
- [Repository Structure](#repository-structure)
- [Create a Checklist](#create-a-checklist)
- [Formatting Conventions](#formatting-conventions)
- [Review and Validation](#review-and-validation)
- [Contributing](#contributing)
- [Safety and Limitations](#safety-and-limitations)

## Checklist Library

| Phase | Checklist | Status | Purpose |
|---|---|:---:|---|
| Planning | [Day Before](Planning/Day%20Before.md) | Usable draft | Prepare equipment, documents, reservations, and preliminary planning before the flight day. |
| Planning | [Day Of](Planning/Day%20of.md) | Early draft | Organize same-day planning and weather checks. |
| In flight | [In-Range — VFR](In-Flight%20Checklists/In-Range%20%28VFR%29.md) | Usable draft | Reduce workload before the approach and landing phases. |
| Authoring | [Generic Checklist Template](CHECKLIST_TEMPLATE.md) | Template | Provides reusable sections and copy-ready Markdown patterns. |

> [!NOTE]
> A “draft” status means the document may still contain placeholders or require validation for a particular aircraft, mission, or operating environment.

## Quick Start

### Read on GitHub

1. Open a checklist from the [library](#checklist-library).
2. Select **Preview** if GitHub is displaying the source instead of the rendered document.
3. Use the outline button in the file header to jump between headings.

### Use Locally

Clone the repository with Git:

```bash
git clone https://github.com/marpa96/Flight-Checklists.git
cd Flight-Checklists
```

Then open any `.md` file in a Markdown viewer or editor. GitHub Desktop can keep the local copy synchronized, while editors such as Visual Studio Code can render a live Markdown preview.

### Print or Export

Open the rendered checklist in a browser or Markdown editor and use its print or PDF export function. Always inspect the result for clipped tables, missing callouts, and awkward page breaks before operational use.

## Repository Structure

```text
Flight-Checklists/
├── assets/
│   └── readme-banner.png
├── In-Flight Checklists/
│   └── In-Range (VFR).md
├── Planning/
│   ├── Day Before.md
│   └── Day of.md
├── Pre-Flight Checklists/
│   └── Pre-Drive Checklists
├── CHECKLIST_TEMPLATE.md
└── README.md
```

Checklist files are grouped by purpose:

- `Planning/` contains preparation performed before the day of departure and on the flight day.
- `Pre-Flight Checklists/` is reserved for checks performed before flight operations begin.
- `In-Flight Checklists/` contains phase-of-flight procedures and flows.
- `CHECKLIST_TEMPLATE.md` is the starting point for new documents.
- `assets/` contains images used by repository documentation.

## Create a Checklist

1. Open [CHECKLIST_TEMPLATE.md](CHECKLIST_TEMPLATE.md).
2. Copy the entire file or only the sections you need.
3. Give the new file a descriptive name ending in `.md` so GitHub renders it correctly.
4. Replace every placeholder, source link, date, and applicability field.
5. Validate the content against the authoritative documents for the aircraft or operation.
6. Ask another qualified person to review it before operational use.

A minimal checklist item follows this pattern:

```markdown
- [ ] **Item or control** — Required state or action
```

For an item that requires a recorded value:

```markdown
- [ ] **Fuel quantity** — `_____ gallons`
```

<details>
<summary><strong>Example checklist section</strong></summary>

```markdown
## Before Starting

> [!CAUTION]
> Stop if a required condition is not satisfied.

- [ ] **Required documents** — On board and current
- [ ] **Weather** — Reviewed
- [ ] **Fuel** — Quantity and reserves verified
```

</details>

## Formatting Conventions

Consistent language makes a checklist easier to scan under workload.

| Element | Convention | Example |
|---|---|---|
| Action item | Checkbox + bold subject + required action/state | `- [ ] **Mixture** — Set` |
| Verification | Use direct, observable wording | `- [ ] **Fuel selector** — Desired tank` |
| Value | Include a blank and unit | `` `_____ gallons` `` |
| Sequence | Use a numbered task list when order matters | `1. [ ] First action` |
| Warning | Use a GitHub Markdown alert | `> [!WARNING]` |
| Source | Link the governing reference | `[POH/AFM](link)` |
| Filename | Descriptive name with `.md` extension | `In-Range (VFR).md` |

Prefer concise, affirmative instructions. Avoid vague verbs such as “check” when a more observable state—`SET`, `ON`, `SECURE`, `WITHIN LIMITS`, or a specific value—would be clearer.

## Review and Validation

Before treating a checklist as ready for use:

- [ ] Confirm the applicable aircraft, model, equipment, and type of operation.
- [ ] Compare every item and sequence with the current POH/AFM and manufacturer checklist.
- [ ] Verify limitations, speeds, quantities, and units.
- [ ] Remove all template placeholders and example links.
- [ ] Confirm warnings and decision points are unambiguous.
- [ ] Test the rendered and printed layouts.
- [ ] Conduct an independent review with a qualified instructor, pilot, or maintainer as appropriate.
- [ ] Record the revision date and source material.

> [!IMPORTANT]
> A well-formatted checklist can still be technically wrong or unsuitable for a specific aircraft. Presentation is not validation.

## Contributing

Improvements, corrections, and new checklists are welcome.

1. Create a branch for the change.
2. Add or update the relevant Markdown file.
3. Keep unrelated changes out of the same commit.
4. Preview the rendered Markdown and test every relative link.
5. Describe the source and reason for procedural changes in the commit or pull request.
6. Open a pull request for review.

Suggested commit messages:

```text
Add VFR arrival checklist
Clarify day-before equipment checks
Correct checklist navigation links
```

When reporting a safety-critical error, identify the checklist, item, applicable aircraft or operation, and authoritative source. Do not rely on an issue report alone to notify pilots of an immediate hazard.

## Safety and Limitations

- Regulations, aircraft configurations, avionics, and operator procedures vary.
- Checklist order and terminology may be inappropriate for another aircraft.
- Repository content can become outdated even when it was accurate when written.
- Emergency and abnormal procedures require especially careful validation and training.
- The pilot in command remains responsible for determining whether the aircraft and operation are safe and compliant.

> [!CAUTION]
> Do not introduce an unvalidated checklist into cockpit operations. Review it on the ground, reconcile it with approved sources, and practice its use in an appropriate training environment.

---

<div align="center">

Maintained as a practical, evolving reference for safer and more consistent flight preparation.

</div>
