import { Request, Response } from "express";
import { ListEquipmentUseCase } from "../useCases/ListEquipmentUseCase.js";

class ListEquipmentController {
  private useCase: ListEquipmentUseCase;

  constructor(useCase: ListEquipmentUseCase) {
    this.useCase = useCase;
  }

  handle = async (_request: Request, response: Response): Promise<Response> => {
    const inventory = await this.useCase.execute();

    return response.status(200).json(inventory);
  };
}

export { ListEquipmentController };
