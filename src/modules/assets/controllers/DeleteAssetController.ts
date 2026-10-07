import { Request, Response } from "express";
import { FindAssetSchema } from "../dto/AssetDTO.js";
import { DeleteAssetUseCase } from "../useCases/DeleteAssetUseCase.js";

class DeleteAssetController {
  private useCase: DeleteAssetUseCase;

  constructor(useCase: DeleteAssetUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const query = FindAssetSchema.safeParse(request.params);

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

    return response.status(204).send();
  };
}

export { DeleteAssetController };
