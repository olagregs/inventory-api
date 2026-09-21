import { Router } from "express";
import { CreateEquipmentController } from "@modules/equipments/controllers/CreateEquipmentController.js";
import { DeleteEquipmentController } from "@modules/equipments/controllers/DeleteEquipmentController.js";
import { FindEquipmentController } from "@modules/equipments/controllers/FindEquipmentController.js";
import { ListEquipmentController } from "@modules/equipments/controllers/ListEquipmentController.js";
import { UpdateEquipmentController } from "@modules/equipments/controllers/UpdateEquipmentController.js";
import { EquipmentRepository } from "@modules/equipments/repositories/EquipmentRepository.js";
import { CreateEquipmentUseCase } from "@modules/equipments/useCases/CreateEquipmentUseCase.js";
import { DeleteEquipmentUseCase } from "@modules/equipments/useCases/DeleteEquipmentUseCase.js";
import { FindEquipmentUseCase } from "@modules/equipments/useCases/FindEquipmentUseCase.js";
import { ListEquipmentUseCase } from "@modules/equipments/useCases/ListEquipmentUseCase.js";
import { UpdateEquipmentUseCase } from "@modules/equipments/useCases/UpdateEquipmentUseCase.js";

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

export { router };
