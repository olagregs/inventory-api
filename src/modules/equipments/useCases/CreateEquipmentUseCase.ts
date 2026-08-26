import { randomUUID } from "node:crypto";

import { CreateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentRepository } from "../repositories/EquipmentRepository.js";

class CreateEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: CreateEquipmentDTO) {
    const equipmentAlreadyExists =  this.repository.find(data);

    if(equipmentAlreadyExists) {
      return { message: "Equipment already exists"}
    }

    const equipment = this.repository.create({
      id: randomUUID(),
      ...data
    });

    return equipment;
  }
}

export { CreateEquipmentUseCase }