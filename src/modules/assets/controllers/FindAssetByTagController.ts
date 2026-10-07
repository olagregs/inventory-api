import { Request, Response } from "express";
import { FindAssetByTagSchema } from "../dto/AssetDTO.js";
import { FindAssetByTagUseCase } from "../useCases/FindAssetByTagUseCase.js";

class FindAssetByTagController {
  private useCase: FindAssetByTagUseCase;

  constructor(useCase: FindAssetByTagUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const query = FindAssetByTagSchema.safeParse(request.params);

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

export { FindAssetByTagController };
