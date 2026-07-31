# Checklist Title

> **Purpose:** Briefly state what this checklist accomplishes and when to use it.
>
> **Important:** Add any safety warning, limitation, or governing-document reminder here.

**Owner:** Name or role  
**Applies to:** Aircraft, equipment, operation, or situation  
**Revision:** 0.1  
**Last updated:** YYYY-MM-DD  
**Source of truth:** [Document title](https://example.com)

---

## Checklist Information

| Field | Value |
|---|---|
| Date | YYYY-MM-DD |
| Time | HH:MM / Local or UTC |
| Location | Location |
| Aircraft / equipment | Identifier |
| Person performing | Name or initials |
| Person verifying | Name or initials / N/A |

## Before Starting

### Required Conditions

- [ ] Condition one is satisfied
- [ ] Condition two is satisfied
- [ ] Required authorization has been obtained

### Required Items

- [ ] Primary item
- [ ] Backup item
- [ ] Reference document: [Name](relative/path-or-url)

> [!CAUTION]
> Stop if any required condition or item is missing.

## Main Checklist

### Phase 1 — Preparation

- [ ] **Item or control** — Required state or action
- [ ] **Quantity / value** — `_____`
- [ ] **Setting** — Set to `_____`
- [ ] **Document** — Reviewed and current
- [ ] **Briefing** — Complete

### Phase 2 — Action

1. [ ] Perform the first action
2. [ ] Verify the expected result
3. [ ] Record the relevant value: `_____`
4. [ ] Continue only when all criteria are met

### Phase 3 — Verification

- [ ] Independent check completed
  - [ ] Component A verified
  - [ ] Component B verified
  - [ ] Component C verified
- [ ] Final state matches the expected configuration
- [ ] Exceptions are documented below

## Decision Point

**Is the acceptance criterion satisfied?**

- [ ] **Yes** — Continue to the completion section
- [ ] **No** — Stop, make the situation safe, and follow the exception procedure

## If / Then Actions

| If this condition exists... | Then take this action... | Complete |
|---|---|:---:|
| Normal condition | Continue with the checklist | [ ] |
| Caution condition | Correct the issue, then repeat the check | [ ] |
| Unsafe or unknown condition | Stop and consult the governing procedure | [ ] |

## Completion

- [ ] Equipment returned to the correct state
- [ ] Work area inspected
- [ ] Required records updated
- [ ] Follow-up actions assigned
- [ ] Checklist reviewed for completeness

**Completed by:** `____________________`  
**Date/time:** `____________________`  
**Verified by:** `____________________`

## Notes and Exceptions

> Record anything unusual, deferred, incomplete, or requiring follow-up.

```text
Notes:


```

### Follow-Up Items

- [ ] Action — Owner: `_____` — Due: `YYYY-MM-DD`
- [ ] Action — Owner: `_____` — Due: `YYYY-MM-DD`

## References

- [Primary manual or procedure](https://example.com)
- [Related checklist](relative/path.md)
- Supporting note or citation[^1]

[^1]: Place footnotes and additional source details here.

---

# Copy-and-Paste Markdown Elements

Use the snippets below when adapting this document. Delete this section when it is no longer needed.

## Basic Task Lists

```markdown
- [ ] Not started
- [x] Complete
- [ ] **Control or item** — Desired state
  - [ ] Nested verification
```

## Ordered Tasks

```markdown
1. [ ] First action
2. [ ] Second action
3. [ ] Third action
```

## Status Markers

```markdown
- ✅ Complete
- ⚠️ Caution or attention required
- ❌ Failed or unavailable
- ⏳ Pending or deferred
- ➡️ Continue to the next phase
```

## Callouts


> [!NOTE]
> Helpful supporting information.

> [!TIP]
> An optional technique or efficiency improvement.

> [!IMPORTANT]
> Information essential to successful completion.

> [!WARNING]
> A condition that could cause injury or serious damage.

> [!CAUTION]
> A condition requiring care to avoid an undesirable result.


> **Compatibility note:** GitHub renders the labels above as styled alerts. Other Markdown viewers may display them as ordinary blockquotes, while preserving the text.

## Compact Checklist Table


| Item | Required state | Check |
|---|---|:---:|
| Example control | ON | [ ] |
| Example value | Within limits | [ ] |


## Fill-In Fields


**Name:** `____________________`  
**Date:** `YYYY-MM-DD`  
**Value:** `_____ units`


## Links and Images


[Descriptive link text](relative/path-or-url)

![Concise image description](relative/path-or-url "Optional title")


## Collapsible Supporting Detail


<details>
<summary>Show supporting detail</summary>

Place supplementary instructions, explanations, or references here.

</details>


## Keyboard Input and Literal Values


Press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

Set the selector to `AUTO`.


## Revision History


| Revision | Date | Author | Summary |
|---|---|---|---|
| 0.1 | YYYY-MM-DD | Initials | Initial draft |
| 1.0 | YYYY-MM-DD | Initials | Approved release |


## Section Divider


---


## Optional Revision History

| Revision | Date | Author | Summary |
|---|---|---|---|
| 0.1 | YYYY-MM-DD | Initials | Initial draft |

<!--
Author-only comments can be placed inside an HTML comment.
They remain in the source but are hidden in the rendered document.
-->
