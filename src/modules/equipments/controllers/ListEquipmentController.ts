import { Request, Response } from "express";

import { ListEquipmentUseCase } from "../useCases/ListEquipmentUseCase.js";

class ListEquipmentController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listEquipmentUseCase = new ListEquipmentUseCase();

    const inventory = await listEquipmentUseCase.execute();

    return response.status(200).json(inventory);
  }
}

export { ListEquipmentController }