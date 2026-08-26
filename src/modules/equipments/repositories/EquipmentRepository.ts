import { EquipmentDTO, FindEquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";

class EquipmentRepository {
  private inventory: EquipmentDTO[] = [];

  create(data: EquipmentDTO) {
    this.inventory.push(data);

    const equipment = this.inventory.find(equipment => equipment.serialNumber === data.serialNumber);

    return equipment;
  }

  find(data: FindEquipmentDTO) {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.serialNumber
    )

    return equipment;
  }

  list() {
    return this.inventory;
  }

  update(data: UpdateEquipmentDTO) {
    const equipment = this.inventory.find(
      equipment => equipment.serialNumber === data.params.serialNumber
    )

    if(equipment) {
      equipment.status = data.body.status;
      equipment.location = data.body.location;
    }
  }

  delete(data: EquipmentDTO) {
    const index = this.inventory.findIndex(equipment => equipment.serialNumber === data.serialNumber);

    this.inventory.splice(index, 1);
  }
}

export { EquipmentRepository }