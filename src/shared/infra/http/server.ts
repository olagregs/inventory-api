import "@shared/config/zod.js";
import { env } from "@shared/config/env.js";
import { app } from "./app.js";

app.listen(env.port, () => console.log(`Server is running on port ${env.port}...`));
