# FliteChek catalog workflow

Keep your descriptive Markdown filenames. Each checklist carries one invisible HTML comment at the end, such as `<!-- flitechek-id: 000001 -->`. Match that ID to an entry in `catalog.yaml`.

Copy an entry from `CATALOG-ENTRY.yaml` to add a checklist. Keep all fields. Use quoted six-digit IDs, `[]` for unrestricted lists, and `null` for unassigned optional text/sequence. Increase `revision` whenever content or metadata changes. File order and catalog order do not determine identity.

On this Mac, double-click **Prepare Checklist Library.command** in the FliteChek project folder. It validates this repository and regenerates `library.flitechek.json` here plus a ZIP in the app's `web` folder. Nothing is committed or pushed automatically.

On iPhone: **Menu → Import / update checklists**. Import a ZIP/JSON from Files, or leave the update source blank to get this Mac's package. Review, then install. For GitHub, commit the generated JSON together with source changes, then save that file's public Raw URL in the app once. Private repositories use a downloaded ZIP. Checklist use after installation needs no connection.

The numbered procedure folders are included through their IDs. README, study notes and templates have no IDs and are not imported. Catalog entries with missing documents, duplicate IDs or invalid fields are rejected. Nothing is renamed. Existing app runs retain their original revision and progress.

The catalog flags the existing C172S/C172R applicability discrepancy in the C172S pre-flight document. Review that before operational use.
