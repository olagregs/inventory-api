import "../../config/zod.js";
import { app } from "./app.js";
import { env } from "@shared/config/env.js";

app.listen(env.port, () => console.log(`Server is running on port ${env.port}...`));