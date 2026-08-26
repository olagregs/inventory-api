import { EquipmentRepository } from "../repositories/EquipmentRepository.js"
import { FindEquipmentDTO } from '../dto/EquipmentDTO.js';

class DeleteEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: FindEquipmentDTO) {
    const equipment = this.repository.find(data);

    if(!equipment) {
      return { message: "Equipment not found!" }
    }

    this.repository.delete(equipment);
  }
}

export { DeleteEquipmentUseCase }