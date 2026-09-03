import { Either, fail, success } from "@shared/config/types/either.js";
import { EquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js";
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";


class UpdateEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: UpdateEquipmentDTO): Promise<Either<EquipmentNotFound, EquipmentDTO>> {
    const equipmentAlreadyExists = this.repository.find(data.params);
  
    if(!equipmentAlreadyExists) {
      return fail(new EquipmentNotFound())
    }

    const equipment = this.repository.update(data) as EquipmentDTO;
  
    return success(equipment);
  }
}

export { UpdateEquipmentUseCase }