import { Request, Response } from "express";
import { UpdateAssetSchema } from "../dto/AssetDTO.js";
import { UpdateAssetUseCase } from "../useCases/UpdateAssetUseCase.js";

class UpdateAssetController {
  private useCase: UpdateAssetUseCase;

  constructor(useCase: UpdateAssetUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const result = UpdateAssetSchema.safeParse({
      params: request.params,
      body: request.body,
    });

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

    return response.status(200).json(output.value);
  };
}

export { UpdateAssetController };
