import { Router } from "express";
import { CreateAssetController } from "@modules/assets/controllers/CreateAssetController.js";
import { FindAssetController } from "@modules/assets/controllers/FindAssetController.js";
import { ListAssetController } from "@modules/assets/controllers/ListAssetController.js";
import { UpdateAssetController } from "@modules/assets/controllers/UpdateAssetController.js";
import { AssetRepository } from "@modules/assets/repositories/AssetRepository.js";
import { CreateAssetUseCase } from "@modules/assets/useCases/CreateAssetUseCase.js";
import { FindAssetUseCase } from "@modules/assets/useCases/FindAssetUseCase.js";
import { ListAssetUseCase } from "@modules/assets/useCases/ListAssetUseCase.js";
import { UpdateAssetUseCase } from "@modules/assets/useCases/UpdateAssetUseCase.js";

const router = Router();

const repository = new AssetRepository();

const createAssetUseCase = new CreateAssetUseCase(repository);
const findAssetUseCase = new FindAssetUseCase(repository);
const listAssetUseCase = new ListAssetUseCase(repository);
const updateAssetUseCase = new UpdateAssetUseCase(repository);

const createAssetController = new CreateAssetController(createAssetUseCase);
const findAssetController = new FindAssetController(findAssetUseCase);
const listAssetController = new ListAssetController(listAssetUseCase);
const updateAssetController = new UpdateAssetController(updateAssetUseCase);

router.post("/assets", createAssetController.handle);
router.get("/assets/:serialNumber", findAssetController.handle);
router.get("/assets", listAssetController.handle);
router.patch("/assets/:serialNumber", updateAssetController.handle);

export { router };
