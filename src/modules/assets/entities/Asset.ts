class Asset {
  id: string;
  model: string;
  tag: string;
  serialNumber: string;
  status: string;
  location: string;

  constructor(
    id: string,
    model: string,
    tag: string,
    serialNumber: string,
    status: string,
    location: string,
  ) {
    this.id = id;
    this.model = model;
    this.tag = tag;
    this.serialNumber = serialNumber;
    this.status = status;
    this.location = location;
  }
}

export { Asset };
