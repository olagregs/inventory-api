# Error Handling: Either Pattern vs Throwing Exceptions

## Status: Approved

## Context

In every software project, handling operational errors and business failures is inevitable. Traditionally, this is managed by throwing exceptions (`throw new Error`) and capturing them via `try/catch` blocks. However, inspired by how validation libraries like Zod manage execution flows elegantly through data structures (such as `safeParse`), we should evaluate treating domain errors as data (functional error handling) rather than throwing runtime exceptions.

## Options

* **Either Pattern** (Functional error handling, returning explicit Failures or Successes)
* **Throwing Exceptions** (Imperative error handling using standard `throw new Error`)

## Decision

I have decided to proceed with the **Either Pattern** for managing domain and business rule failures. This approach allows the application to handle known business errors gracefully by returning them as predictable data structures instead of abruptly interrupting the local execution flow. This approach forces the consumer of the function (e.g., the Controller) to explicitly handle both success and failure cases using TypeScript's type system.


## Consequences
* **Pros**
  - Treating errors as data enforces type safety and predictability, ensuring the application handles expected business failures explicitly.
  - Removes the need for messy, nested `try/catch` blocks across layers; the function signature clearly indicates what can go wrong, returning a consistent object layout where only the internal value type changes.
  - Aligns the project with robust enterprise patterns often looked for by European technical recruiters.

* **Cons**
- TypeScript does not natively include an `Either` construct, requiring the development and maintenance of a custom utility type or utility helper functions (`success` and `fail`).
  - Unexpected infrastructure-level exceptions (e.g., database network timeouts) still require a global fallback catch mechanism, meaning the two strategies must coexist.
