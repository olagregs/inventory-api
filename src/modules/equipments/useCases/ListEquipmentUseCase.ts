import { EquipmentDTO } from "../dto/EquipmentDTO.js";
import { IEquipmentRepository } from "../repositories/IEquipmentRepository.js";

class ListEquipmentUseCase {
  private repository: IEquipmentRepository;

  constructor(repository: IEquipmentRepository) {
    this.repository = repository;
  }

  async execute(): Promise<EquipmentDTO[]> {
    return this.repository.list();
  }
}

export { ListEquipmentUseCase }