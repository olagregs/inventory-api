# Data Model: Lookup Tables and Asset Audit Log

## Status: Approved

## Context

The inventory API requires a Single Source of Truth (SSOT) to manage its asset attributes efficiently without redundant data duplication across the database. Additionally, we must ensure strict data integrity so that every asset persisted in the system adheres to uniform, standardized attributes (e.g., status, categories, or locations).

## Options

* **Inline Enums / Strings:** Store status or category attributes as hardcoded enums or raw strings directly inside the `Assets` table.
* **Lookup Tables + Immutable Audit Log:** Separate these attributes into dedicated lookup tables, linking them via foreign keys, combined with immutable tables for audit logs.

## Decision

I have decided to proceed with **Lookup Tables + Immutable Audit Log:**. This approach ensures data normalization and linear consistency across our database model. Relying on application-level enums would mistakenly shift structural database responsibilities onto the application code, while using raw strings would introduce risks of data duplication and structural inconsistencies.

Additionally, lifecycle changes (CREATE and UPDATE) are recorded in `AssetLogs` as append-only entries, never updated or deleted. To preserve this audit trail and referential integrity, assets are not physically deleted—retirement is represented by setting the asset's status to `DISPOSED`. Since each asset is a unique, indivisible physical item, no `quantity` field is introduced.

## Consequences
* **Pros**
  - Foreign key constraints prevent invalid or malformed information from being stored in the database.
  - Ensures absolute consistency and reference integrity for all stored asset metadata.
  - Preserves an immutable, traceable audit trail of asset lifecycle changes.
  - Allows easy extensibility if we need to add metadata to attributes (e.g., descriptions or active/inactive flags) in the future without altering the main schema.
  
* **Cons**
  - Increases initial development time compared to simply defining a rapid enum list.
  - Adds slight architectural complexity to the application layer, requiring additional `JOIN` operations or repository queries to fetch complete asset details.
  - Requires seed data for lookup tables to be present at runtime for the system to function correctly.
