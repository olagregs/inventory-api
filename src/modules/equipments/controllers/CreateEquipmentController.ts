import { Request, Response } from "express";
import { CreateEquipmentSchema } from "../dto/EquipmentDTO.js";
import { CreateEquipmentUseCase } from "../useCases/CreateEquipmentUseCase.js";

class CreateEquipmentController {
  private useCase: CreateEquipmentUseCase;

  constructor(useCase: CreateEquipmentUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const result = CreateEquipmentSchema.safeParse(request.body);

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

export { CreateEquipmentController };
