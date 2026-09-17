import { Router } from 'express';

import { CreateEquipmentController } from '@modules/equipments/controllers/CreateEquipmentController.js';
import { FindEquipmentController } from '@modules/equipments/controllers/FindEquipmentController.js';
import { ListEquipmentController } from '@modules/equipments/controllers/ListEquipmentController.js';
import { UpdateEquipmentController } from '@modules/equipments/controllers/UpdateEquipmentController.js';
import { DeleteEquipmentController } from '@modules/equipments/controllers/DeleteEquipmentController.js';
import { EquipmentRepository } from '../repositories/EquipmentRepository.js';
import { CreateEquipmentUseCase } from '../useCases/CreateEquipmentUseCase.js';
import { FindEquipmentUseCase } from '../useCases/FindEquipmentUseCase.js';
import { ListEquipmentUseCase } from '../useCases/ListEquipmentUseCase.js';
import { UpdateEquipmentUseCase } from '../useCases/UpdateEquipmentUseCase.js';
import { DeleteEquipmentUseCase } from '../useCases/DeleteEquipmentUseCase.js';

const router = Router();

const repository = new EquipmentRepository();

const createEquipmentUseCase = new CreateEquipmentUseCase(repository);
const findEquipmentUseCase = new FindEquipmentUseCase(repository);
const listEquipmentUseCase = new ListEquipmentUseCase(repository);
const updateEquipmentUseCase = new UpdateEquipmentUseCase(repository);
const deleteEquipmentUseCase = new DeleteEquipmentUseCase(repository);

const createEquipmentController = new CreateEquipmentController(createEquipmentUseCase);
const findEquipmentController = new FindEquipmentController(findEquipmentUseCase);
const listEquipmentController = new ListEquipmentController(listEquipmentUseCase);
const updateEquipmentController = new UpdateEquipmentController(updateEquipmentUseCase);
const deleteEquipmentController = new DeleteEquipmentController(deleteEquipmentUseCase);

router.post("/equipment", createEquipmentController.handle);
router.get("/equipment/:serialNumber", findEquipmentController.handle);
router.get("/equipment", listEquipmentController.handle);
router.patch("/equipment/:serialNumber", updateEquipmentController.handle);
router.delete("/equipment/:serialNumber", deleteEquipmentController.handle);

export { router }