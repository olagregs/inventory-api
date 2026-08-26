import { UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js";


class UpdateEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: UpdateEquipmentDTO) {
    const equipment = this.repository.find(data.params);
  
    if(!equipment) {
      return { message: "Equipment does not exist!" };
    }

    this.repository.update(data);
  
    return equipment;
  }
}

export { UpdateEquipmentUseCase }