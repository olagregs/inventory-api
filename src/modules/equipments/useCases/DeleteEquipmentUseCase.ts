import { Either, fail, success } from "@shared/config/types/either.js";
import { FindEquipmentDTO } from '../dto/EquipmentDTO.js';
import { EquipmentNotFound } from "../errors/EquipmentNotFound.js";
import { IEquipmentRepository } from "../repositories/IEquipmentRepository.js";

class DeleteEquipmentUseCase {
  private repository: IEquipmentRepository;

  constructor(repository: IEquipmentRepository) {
    this.repository = repository;
  }

  async execute(data: FindEquipmentDTO): Promise<Either<EquipmentNotFound, void>> {
    const equipment = this.repository.find(data);

    if(!equipment) {
      return fail(new EquipmentNotFound());
    }

    this.repository.delete(data);

    return success(undefined);
  }
}

export { DeleteEquipmentUseCase }