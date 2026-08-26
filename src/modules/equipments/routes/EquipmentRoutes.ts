import { Router } from 'express';

import { CreateEquipmentController } from '@modules/equipments/controllers/CreateEquipmentController.js';
import { FindEquipmentController } from '@modules/equipments/controllers/FindEquipmentController.js';
import { ListEquipmentController } from '@modules/equipments/controllers/ListEquipmentController.js';
import { UpdateEquipmentController } from '@modules/equipments/controllers/UpdateEquipmentController.js';
import { DeleteEquipmentController } from '@modules/equipments/controllers/DeleteEquipmentController.js';

const router = Router();

router.post("/equipment", new CreateEquipmentController().handle);
router.get("/equipment/:serialNumber", new FindEquipmentController().handle);
router.get("/equipment", new ListEquipmentController().handle);
router.patch("/equipment/:serialNumber", new UpdateEquipmentController().handle);
router.delete("/equipment/:serialNumber", new DeleteEquipmentController().handle);

export { router }