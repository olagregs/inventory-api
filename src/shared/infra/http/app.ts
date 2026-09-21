import express from "express";
import { router } from "@modules/equipments/routes/equipment.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app };
