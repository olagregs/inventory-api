class Asset {
  constructor(
    public id: string,
    public model: string,
    public tag: string,
    public serialNumber: string,
    public assetTypeId: string,
    public assetStatusId: string,
    public assetLocationId: string,
  ) {}
}

export { Asset };
