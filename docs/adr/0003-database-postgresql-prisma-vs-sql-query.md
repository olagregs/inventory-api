# Database PostgreSQL with Prisma vs SQL with Query Builder

## Status: Approved

## Context

The project requires a reliable data persistence layer to store inventory records. We need to choose an option that balances robust database management with development velocity, considering the native features available in our TypeScript stack.

## Options

* **Prisma with PostgreSQL**
* **SQL with Query Builder**

## Decision

I have decided to proceed with **Prisma with PostgreSQL** due to the simplicity it brings to the overall database environment. Its native integration with TypeScript makes development significantly faster, serving as an efficient ORM that handles SQL generation and type safety automatically.

## Consequences 
* **Pros**
  - Development velocity increases due to its native connection (IntelliSense) with VS Code and TypeScript.
  - Automatically handles query generation and migrations through the ORM layer.
  - Maintenance is easier because the declarative schema file and client queries are more readable than pure SQL strings.

* **Cons**
  - Introduces a minor learning curve specific to Prisma's syntax, CLI workflows, and configuration layout.
  - Introduces an architectural abstraction layer that hides raw SQL generation, which could obscure performance optimization in highly complex operations.
