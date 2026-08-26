import { Request, Response } from 'express';

import { FindEquipmentUseCase } from '../useCases/FindEquipmentUseCase.js';
import { FindEquipmentSchema } from '../dto/EquipmentDTO.js';

class FindEquipmentController {
  async handle(request: Request, response: Response) {
    const query = FindEquipmentSchema.safeParse(request.params);

    if(!query.success) {
      const error = query.error;

      return response.status(400).json({
        error: error.issues[0]?.message
      });
    }

    const equipment = await new FindEquipmentUseCase().execute(query.data);

    if(!equipment) {
      return response.status(404).json({ message: "Equipment not found" });
    }

    return response.status(200).json(equipment);
  }
}

export { FindEquipmentController   }