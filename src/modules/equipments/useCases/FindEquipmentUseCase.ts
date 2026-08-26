import { FindEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js"

class FindEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: FindEquipmentDTO) {
    const equipment = this.repository.find(data);

    if(!equipment) {
      return { message: "Equipment not found"}
    }

    return equipment;
  }
}

export { FindEquipmentUseCase }