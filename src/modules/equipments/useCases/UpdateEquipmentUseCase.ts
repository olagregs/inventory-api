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
    const equipment = this.repository.find(data.params);

    if (!equipment) {
      return fail(new EquipmentNotFound());
    }

    return success(this.repository.update(equipment, data));
  }
}

export { UpdateEquipmentUseCase };
