import { Either, fail, success } from "@shared/config/types/either.js";
import { EquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";
import { IEquipmentRepository } from "../repositories/IEquipmentRepository.js";


class UpdateEquipmentUseCase {
  private repository: IEquipmentRepository;

  constructor(repository: IEquipmentRepository) {
    this.repository = repository;
  }

  async execute(data: UpdateEquipmentDTO): Promise<Either<EquipmentNotFound, EquipmentDTO>> {
    const equipmentExists = this.repository.find(data.params);
  
    if(!equipmentExists) {
      return fail(new EquipmentNotFound())
    }

    const equipment = this.repository.update(data) as EquipmentDTO;
  
    return success(equipment);
  }
}

export { UpdateEquipmentUseCase }