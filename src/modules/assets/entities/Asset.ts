class Asset {
  id: string;
  model: string;
  tagId: string;
  serialNumber: string;
  status: string;
  location: string;

  constructor(
    id: string,
    model: string,
    tagId: string,
    serialNumber: string,
    status: string,
    location: string,
  ) {
    this.id = id;
    this.model = model;
    this.tagId = tagId;
    this.serialNumber = serialNumber;
    this.status = status;
    this.location = location;
  }
}

export { Asset };
