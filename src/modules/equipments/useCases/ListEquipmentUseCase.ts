import { EquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js"

class ListEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(): Promise<EquipmentDTO[]> {
    return this.repository.list();
  }
}

export { ListEquipmentUseCase }