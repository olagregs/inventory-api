import { randomUUID } from "node:crypto";

import { EquipmentRepository } from "../repositories/EquipmentRepository.js";
import { Either, fail, success } from "@shared/config/types/either.js";
import { EquipmentDTO, CreateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { EquipmentAlreadyExists } from "../errors/EquipmentAlreadyExists.js";

class CreateEquipmentUseCase {
  private repository = new EquipmentRepository();

  async execute(data: CreateEquipmentDTO): Promise<Either<EquipmentAlreadyExists, EquipmentDTO>> {
    const equipmentAlreadyExists = this.repository.find(data);

    if(equipmentAlreadyExists) {
      return fail(new EquipmentAlreadyExists());
    }

    const equipment = this.repository.create({
      id: randomUUID(),
      ...data
    });

    return success(equipment);
  }
}

export { CreateEquipmentUseCase }