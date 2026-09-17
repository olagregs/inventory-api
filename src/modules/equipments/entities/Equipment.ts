class Equipment {
  id: string;
  model: string;
  tag_id: string;
  serialNumber: string;
  status: string;
  location: string;

  constructor(id: string, model: string, tag_id: string, serialNumber: string, status: string, location: string) {
    this.id = id;
    this.model = model;
    this.tag_id = tag_id;
    this.serialNumber = serialNumber;
    this.status = status;
    this.location = location;
  }
}

export { Equipment }