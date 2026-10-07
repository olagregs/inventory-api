import { Router } from "express";
import { CreateAssetController } from "@modules/assets/controllers/CreateAssetController.js";
import { FindAssetBySerialController } from "@modules/assets/controllers/FindAssetBySerialController.js";
import { FindAssetByTagController } from "@modules/assets/controllers/FindAssetByTagController.js";
import { ListAssetController } from "@modules/assets/controllers/ListAssetController.js";
import { UpdateAssetController } from "@modules/assets/controllers/UpdateAssetController.js";
import { AssetRepository } from "@modules/assets/repositories/AssetRepository.js";
import { CreateAssetUseCase } from "@modules/assets/useCases/CreateAssetUseCase.js";
import { FindAssetBySerialUseCase } from "@modules/assets/useCases/FindAssetBySerialUseCase.js";
import { FindAssetByTagUseCase } from "@modules/assets/useCases/FindAssetByTagUseCase.js";
import { ListAssetUseCase } from "@modules/assets/useCases/ListAssetUseCase.js";
import { UpdateAssetUseCase } from "@modules/assets/useCases/UpdateAssetUseCase.js";

const router = Router();

const repository = new AssetRepository();

const createAssetUseCase = new CreateAssetUseCase(repository);
const findAssetBySerialUseCase = new FindAssetBySerialUseCase(repository);
const findAssetByTagUseCase = new FindAssetByTagUseCase(repository);
const listAssetUseCase = new ListAssetUseCase(repository);
const updateAssetUseCase = new UpdateAssetUseCase(repository);

const createAssetController = new CreateAssetController(createAssetUseCase);
const findAssetBySerialController = new FindAssetBySerialController(findAssetBySerialUseCase);
const findAssetByTagController = new FindAssetByTagController(findAssetByTagUseCase);
const listAssetController = new ListAssetController(listAssetUseCase);
const updateAssetController = new UpdateAssetController(updateAssetUseCase);

router.post("/assets", createAssetController.handle);
router.get("/assets/serial/:serialNumber", findAssetBySerialController.handle);
router.get("/assets/tag/:tag", findAssetByTagController.handle);
router.get("/assets", listAssetController.handle);
router.patch("/assets/:serialNumber", updateAssetController.handle);

export { router };
