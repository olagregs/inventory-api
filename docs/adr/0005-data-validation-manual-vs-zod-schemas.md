# Data Validation: Manual vs Zod Schemas

## Status: Approved

## Context

In TypeScript applications, it is standard to use interfaces to type-check data across different application layers. However, TypeScript interfaces are erased during transpilation and do not perform validation at runtime. To protect our inventory application endpoints from malformed data and security vulnerabilities, we must choose a robust data validation strategy for incoming payloads.

## Options

* **Manual Data Validation** (Using conditional `if` statements and manual type checking)
* **Zod Schemas** (Using an external schema-first validation library)

## Decision

I have decided to proceed with **Zod Schemas**. Zod provides an extensive ecosystem of integrated functions, strong community support, and native TypeScript type inference. With Zod, we can not only validate incoming payloads at runtime but also cleanly compare objects, safely parse strings, and dynamically extract Data Transfer Objects (DTO) directly from the definitions.

## Consequences
* **Pros**
- Zod schemas persist after the transpilation step, ensuring robust data validation in the runtime environment.
  - Simplifies payload checking by evaluating received data against schemas using clean native methods like `.safeParse()`.
  - Accelerates development velocity by allowing us to extract typed DTOs directly from the schemas (`z.infer<T>`), avoiding type duplication.
  - Enables schema composition and extension (e.g., using `.extend()`), making it easy to create forks or variations without rewriting base definitions.


* **Cons**
  - Requires adding an external dependency to the project package size.
  - Introduces a slight learning curve to become fluent in Zod-specific schema syntax and validation chaining.
  - Validation execution adds a microscopic performance overhead on CPU processing during incoming HTTP payload parsing.
