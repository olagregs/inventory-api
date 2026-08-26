import { Request, Response } from 'express';

import { CreateEquipmentUseCase } from '../useCases/CreateEquipmentUseCase.js';
import { CreateEquipmentSchema } from '../dto/EquipmentDTO.js';

class CreateEquipmentController {
  async handle(request: Request, response: Response) {
    const result = CreateEquipmentSchema.safeParse(request.body);
    
      if (!result.success) {
        const error = result.error;
    
        return response.status(400).json({
          error: error.issues.map(issue => issue.message)
        }); 
      }
    
      const equipment = await new CreateEquipmentUseCase().execute(result.data);
    
      if(!equipment) {
        return response.status(400).json({ message: "Equipment already exists" });
      }

      return response.status(201).json(equipment);
  }
}

export { CreateEquipmentController }