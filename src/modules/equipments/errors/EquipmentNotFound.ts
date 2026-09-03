class EquipmentNotFound extends Error {
  readonly statusCode = 404;
  
  constructor() {
    super("Equipment not found");
  }
}

export { EquipmentNotFound }