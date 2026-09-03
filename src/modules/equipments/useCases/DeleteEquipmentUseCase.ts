import { EquipmentRepository } from "../repositories/EquipmentRepository.js"
import { Either, fail, success } from "@shared/config/types/either.js";
import { FindEquipmentDTO } from '../dto/EquipmentDTO.js';
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";

class DeleteEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: FindEquipmentDTO): Promise<Either<EquipmentNotFound, void>> {
    const equipment = this.repository.find(data);

    if(!equipment) {
      return fail(new EquipmentNotFound());
    }

    this.repository.delete(equipment);

    return success(undefined);
  }
}

export { DeleteEquipmentUseCase }