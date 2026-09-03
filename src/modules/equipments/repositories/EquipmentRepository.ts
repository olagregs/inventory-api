import { EquipmentDTO, FindEquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";

class EquipmentRepository {
  private inventory: EquipmentDTO[] = [];

  create(data: EquipmentDTO): EquipmentDTO {
    this.inventory.push(data);

    return data;
  }

  find(data: FindEquipmentDTO): EquipmentDTO | undefined {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.serialNumber
    );

    return equipment;
  }

  list():EquipmentDTO[] {
    return this.inventory;
  }

  update(data: UpdateEquipmentDTO): EquipmentDTO | undefined {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.params.serialNumber
    );

    if(equipment) {
      equipment.status = data.body.status;
      equipment.location = data.body.location;
    }

    return equipment;
  }

  delete(data: EquipmentDTO):void {
    const index = this.inventory.findIndex(
      equipment => equipment.serialNumber === data.serialNumber
    );

    if(index !== -1) {
      this.inventory.splice(index, 1);
    }
  }
}

export { EquipmentRepository }