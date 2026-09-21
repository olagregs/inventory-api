import { EquipmentDTO, FindEquipmentDTO, UpdateEquipmentDTO } from "../dto/EquipmentDTO.js";
import { Equipment } from "../entities/Equipment.js";

interface IEquipmentRepository {
  create(data: EquipmentDTO): Equipment;
  find(data: FindEquipmentDTO): Equipment | undefined;
  list(): Equipment[];
  update(equipment: Equipment, data: UpdateEquipmentDTO): Equipment;
  delete(data: FindEquipmentDTO): void;
}

export { IEquipmentRepository };
