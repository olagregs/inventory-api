class EquipmentAlreadyExists extends Error {
  readonly statusCode = 409;
  
  constructor() {
    super("Equipment already exists")
  }
}

export { EquipmentAlreadyExists }