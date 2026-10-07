# Architecture Layered vs MVC

## Status: Approved

## Context

The Project structure must be easier to identify how everything is organized, and we must choose one that fits better the Project, considering how big it is.

## Options

* **Option 1:** Layered Architecture
* **Option 2:** MVC Architecture

## Decision

I have decided to follow with layered architecture based on the Project size, we're not going to have many modules, views and considering my familiarity with layered architecure.

## Consequences

* **Pros**
  - Faster initial development and lower risk of bugs due to familiarity with the pattern.
  - Clear separation of business logic (Use Cases) from HTTP infrastructure (Controllers) and data access (Repositories)
  - Easier to write unit tests for business rules.

* **Cons**
  - Higher boilerplate code, requiring multiple files such as controllers, useCases and DTOS even for simple CRUD operations.
  - Potentially over-engineering for the current size of the project.
