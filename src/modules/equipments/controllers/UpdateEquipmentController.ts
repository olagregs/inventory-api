import { Request, Response } from 'express';

import { UpdateEquipmentSchema } from '../dto/EquipmentDTO.js';
import { UpdateEquipmentUseCase } from '../useCases/UpdateEquipmentUseCase.js';

class UpdateEquipmentController {
  private useCase: UpdateEquipmentUseCase;

  constructor(useCase: UpdateEquipmentUseCase) {
    this.useCase = useCase;
  }

  handle = async (request: Request, response: Response): Promise<Response> => {
    const result = UpdateEquipmentSchema.safeParse({
      params: (request.params),
      body: (request.body)
    });

    if(!result.success) {
      const error = result.error;

      return response.status(400).json({
        message: "Invalid fields",
        details: error.issues.map(issue => issue.message)
      });
    }

    const output = await this.useCase.execute(result.data);

    if(output.ok === false) {
      return response.status(output.value.statusCode).json({ message: output.value.message });
    }

    return response.status(200).json(output.value);
  }
}

export { UpdateEquipmentController }