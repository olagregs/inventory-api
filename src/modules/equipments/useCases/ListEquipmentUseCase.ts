import { EquipmentRepository } from "../repositories/EquipmentRepository.js"

class ListEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute() {
    return this.repository.list();
  }
}

export { ListEquipmentUseCase }