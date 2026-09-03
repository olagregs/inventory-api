import { Either, fail, success } from "@shared/config/types/either.js";
import { EquipmentDTO, FindEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js"
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";

class FindEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: FindEquipmentDTO): Promise<Either<EquipmentNotFound, EquipmentDTO>> {
    const equipment = this.repository.find(data);

    if(!equipment) {
      return fail(new EquipmentNotFound());
    }

    return success(equipment);
  }
}

export { FindEquipmentUseCase }