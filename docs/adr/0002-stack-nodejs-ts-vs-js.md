# Stack Node.js TypeScript vs JavaScript

## Status: Approved

## Context

A Node.js project can be developed using either JavaScript or TypeScript. Since TypeScript is ultimately transpiled into JavaScript before execution, we must evaluate whether the benefits of static typing justify the extra compilation step compared to developing directly in vanilla JavaScript.

## Options

* **JavaScript** (Dynamic typing, no compilation step)
* **TypeScript** (Static typing, requires build/transpilation step)

## Decision

I have decided to start the project with **TypeScript**. It introduces compile-time type safety, which prevents many common runtime errors. Furthermore, TypeScript accelerates development velocity through robust autocomplete features (IntelliSense) and native type definitions available in modern ecosystem libraries.

## Consequences
* **Pros**
  - Faster development velocity due to developer familiarity with the language.
  - Better integration with modern libraries that provide native type definitions, making codebase management easier.
  - Early error detection during compile time rather than discovering type bugs in runtime.

* **Cons**
- Increases the learning curve slightly due to TypeScript-specific features like interfaces, generics, and types.
- Type definitions are erased during transpilation, meaning TypeScript alone does not provide data validation for incoming external data at runtime.
