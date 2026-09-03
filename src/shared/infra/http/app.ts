import { router } from '@modules/equipments/routes/EquipmentRoutes.js';
import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app }