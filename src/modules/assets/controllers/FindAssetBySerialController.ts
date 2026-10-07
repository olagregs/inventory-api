import { Request, Response } from "express";
import { FindAssetBySerialSchema } from "../dto/AssetDTO.js";
import { FindAssetBySerialUseCase } from "../useCases/FindAssetBySerialUseCase.js";

class FindAssetBySerialController {
  private useCase: FindAssetBySerialUseCase;

  constructor(useCase: FindAssetBySerialUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const query = FindAssetBySerialSchema.safeParse(request.params);

    if (!query.success) {
      const error = query.error;

      return response.status(400).json({
        message: "Invalid field",
        details: error.issues.map((issue) => issue.message),
      });
    }

    const output = await this.useCase.execute(query.data);

    if (!output.ok) {
      return response.status(output.value.statusCode).json({ message: output.value.message });
    }

    return response.status(200).json(output.value);
  };
}

export { FindAssetBySerialController };
