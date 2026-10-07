# HTTP Infrastructure: Express vs Fastify

## Status: Proposed

## Context

The project was initially started using Express due to its maturity and to maximize development velocity. However, as the application scaled, we evaluated Fastify and realized it offers superior performance benchmarks, encapsulation features, and better native compatibility with TypeScript ecosystems without requiring heavy custom configurations.

## Options

* **Express.js** (Current infrastructure, stable but legacy architecture)
* **Fastify** (Proposed infrastructure, high-performance and modern features)

## Decision

This change is currently under **analysis**. Migrating to Fastify would require pausing feature development to refactor existing HTTP infrastructure layers, temporarily breaking endpoints during the transition. Additionally, it would introduce a minor learning curve to adapt to Fastify’s plugin ecosystem and routing structure. Therefore, the migration remains proposed until the core inventory features are fully delivered.

## Consequences
* **Pros (If migration is approved)**
  - Tremendous increase in HTTP request throughput and lower memory overhead due to Fastify’s optimized routing algorithms.
  - Better architectural separation using Fastify's native schema validation support and encapsulated plugin architecture.
  - Smoother integration with TypeScript types without relying on third-party wrapper middleware.

* **Cons (The cost of making the switch)**
  - Requires stopping active feature development to rewrite the entire controller and server configuration layer.
  - High risk of introducing regression bugs into working API endpoints during the framework refactor.
  - Demands development time to master Fastify-specific behaviors (e.g., hooks, decorators, and lifecycle events).
