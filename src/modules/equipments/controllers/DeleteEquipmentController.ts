import { Request, Response } from "express"
import { FindEquipmentSchema } from "../dto/EquipmentDTO.js";
import { DeleteEquipmentUseCase } from "../useCases/DeleteEquipmentUseCase.js";

class DeleteEquipmentController {
  async handle(request: Request, response: Response) {
    const query = FindEquipmentSchema.safeParse(request.params);

    if(!query.success) {
      const error = query.error;

      return response.status(400).json({
        Error: error.issues[0]?.message
      });

    }
    
    await new DeleteEquipmentUseCase().execute(query.data);

    return response.status(204).send();
  }
}

export { DeleteEquipmentController }