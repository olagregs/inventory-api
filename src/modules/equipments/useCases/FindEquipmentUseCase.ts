import { Either, fail, success } from "@shared/config/types/either.js";
import { EquipmentDTO, FindEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";
import { IEquipmentRepository } from "../repositories/IEquipmentRepository.js";

class FindEquipmentUseCase {
  private repository: IEquipmentRepository;

  constructor(repository: IEquipmentRepository) {
    this.repository = repository;
  }

  async execute(data: FindEquipmentDTO): Promise<Either<EquipmentNotFound, EquipmentDTO>> {
    const equipment = this.repository.find(data);

    if (!equipment) {
      return fail(new EquipmentNotFound());
    }

    return success(equipment);
  }
}

export { FindEquipmentUseCase };
