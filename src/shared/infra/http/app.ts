import { router } from '@modules/equipments/routes/EquipmentRoutes.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use(router);

export { app }