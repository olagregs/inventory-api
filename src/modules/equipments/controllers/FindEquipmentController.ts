import { Request, Response } from 'express';

import { FindEquipmentUseCase } from '../useCases/FindEquipmentUseCase.js';
import { FindEquipmentSchema } from '../dto/EquipmentDTO.js';

class FindEquipmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const query = FindEquipmentSchema.safeParse(request.params);

    if(!query.success) {
      const error = query.error;

      return response.status(400).json({
        message: "Invalid field",
        details: error.issues.map(issue => issue.message)
      });
    }

    const output = await new FindEquipmentUseCase().execute(query.data);

    if(output.ok === false) {
      return response.status(output.value.statusCode).json({ message: output.value.message });
    }

    return response.status(200).json(output.value);
  }
}

export { FindEquipmentController   }