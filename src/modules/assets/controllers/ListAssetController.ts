import { Request, Response } from "express";
import { ListAssetUseCase } from "../useCases/ListAssetUseCase.js";

class ListAssetController {
  private useCase: ListAssetUseCase;

  constructor(useCase: ListAssetUseCase) {
    this.useCase = useCase;
  }

  handle = async (_request: Request, response: Response): Promise<Response> => {
    const inventory = await this.useCase.execute();

    return response.status(200).json(inventory);
  };
}

export { ListAssetController };
