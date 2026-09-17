import { EquipmentDTO, FindEquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { Equipment } from "../entities/Equipment.js";
import { IEquipmentRepository } from "./IEquipmentRepository.js";
class EquipmentRepository implements IEquipmentRepository{
  private inventory: Equipment[] = [];

  create(data: EquipmentDTO): Equipment {
    this.inventory.push(data);

    return data;
  }

  find(data: FindEquipmentDTO): Equipment | undefined {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.serialNumber
    );

    return equipment;
  }

  list(): Equipment[] {
    return this.inventory;
  }

  update(data: UpdateEquipmentDTO): Equipment | undefined {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.params.serialNumber
    );

    if(equipment) {
      equipment.status = data.body.status;
      equipment.location = data.body.location;
    }

    return equipment;
  }

  delete(data: FindEquipmentDTO): void {
    const index = this.inventory.findIndex(
      equipment => equipment.serialNumber === data.serialNumber
    );

    if(index !== -1) {
      this.inventory.splice(index, 1);
    }
  }
}

export { EquipmentRepository }