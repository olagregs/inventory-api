import { Request, Response } from 'express';

import { UpdateEquipmentSchema } from '../dto/EquipmentDTO.js';
import { UpdateEquipmentUseCase } from '../useCases/UpdateEquipmentUseCase.js';

class UpdateEquipmentController {
  async handle(request: Request, response: Response) {
    const result = UpdateEquipmentSchema.safeParse({
      params: (request.params),
      body: (request.body)
    });

    if(!result.success) {
      const error = result.error;

      return response.status(400).json({
        Error: error.issues.map(issue => issue.message)
      });
    }

    await new UpdateEquipmentUseCase().execute(result.data);

    response.status(204).send();
  }
}

export { UpdateEquipmentController }