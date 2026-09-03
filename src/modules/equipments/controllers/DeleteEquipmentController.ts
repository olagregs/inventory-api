import { Request, Response } from "express"

import { FindEquipmentSchema } from "../dto/EquipmentDTO.js";
import { DeleteEquipmentUseCase } from "../useCases/DeleteEquipmentUseCase.js";

class DeleteEquipmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const query = FindEquipmentSchema.safeParse(request.params);

    if(!query.success) {
      const error = query.error;

      return response.status(400).json({
        message: "Invalid field",
        details: error.issues.map(issue => issue.message)
      });
    }
    
    const output = await new DeleteEquipmentUseCase().execute(query.data);

    if(output.ok === false) {
      return response.status(output.value.statusCode).json({ message: output.value.message });
    }

    return response.status(204).send();
  }
}

export { DeleteEquipmentController }