# FliteChek: edit here, push, update

This repository is the only editable checklist source. Open it in VS Code, edit Markdown/catalog.yaml, commit to `main`. This folder’s VS Code settings push automatically after a successful commit. Wait for the push to succeed; a local commit alone is not on GitHub.

The **Publish FliteChek library** GitHub Action validates your files and publishes a generated package on the `flitechek-library` branch. It advances published revision numbers automatically for changed checklists. No manual packaging or editing copies in the app project is needed.

In FliteChek, tap **Update checklists** while online. The app verifies that the package matches the latest GitHub commit before installing. If publication is still running or failed, it keeps the installed copy and asks you to retry. App updates also perform this checklist update. The app already points to the GitHub-generated package. Installed checklists and active progress remain local and usable offline.

Keep human-readable Markdown filenames. Match their hidden ID comments to the catalog. Copy `CATALOG-ENTRY.yaml` when adding a new checklist; all fields should be present. Empty lists `[]` mean unassigned applicability; `null` means an optional text/sequence field is unset.

The app's source code is beside this repository at `Desktop/Flight/FliteChek`. Its web/checklists.json is a generated installation snapshot, not an editable library. GitHub automation changes must be committed and pushed once before delivery is active. Check the Actions tab after a push. Reload VS Code once to pick up the Commit & Push setting. If a push fails, use Sync Changes after resolving the issue. Active runs keep their original checklist revision; a new run uses the updated revision.

Use `group` for Emergency, In-Flight, Ground Ops, Post-Flight, or Planning. Emergency stays behind its own button. The other groups appear in that order only if matching checklists exist. Filenames/folders do not determine app grouping.

Use `["*"]` for universal applicability and `["C172*"]` for all C172 models. `[]` means unassigned, and does not match an active filter. Filters combine with AND; values within a field combine with OR. Search, variants, next-procedure suggestions, and emergency results obey the saved flight profile. A running checklist is preserved and explicitly marked if it no longer matches.

The initial metadata scopes ASEL checklists to C172R/C172S rather than declaring all aircraft universal. Both pre-flight inspection files have conflicting model/source labels and remain unassigned pending review. Markdown procedures were not rewritten.
