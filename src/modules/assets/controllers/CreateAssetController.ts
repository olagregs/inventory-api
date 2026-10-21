import { Request, Response } from "express";
import { AssetSchema } from "../dto/AssetDTO.js";
import { CreateAssetUseCase } from "../useCases/CreateAssetUseCase.js";

class CreateAssetController {
  private useCase: CreateAssetUseCase;

  constructor(useCase: CreateAssetUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const result = AssetSchema.safeParse(request.body);

    if (!result.success) {
      const error = result.error;

      return response.status(400).json({
        message: "Invalid fields",
        details: error.issues.map((issue) => issue.message),
      });
    }

    const output = await this.useCase.execute(result.data);

    if (!output.ok) {
      return response.status(output.value.statusCode).json({ message: output.value.message });
    }

    return response.status(201).json(output.value);
  };
}

export { CreateAssetController };
