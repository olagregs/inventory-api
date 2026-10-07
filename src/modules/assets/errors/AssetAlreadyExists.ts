class AssetAlreadyExists extends Error {
  readonly statusCode = 409;

  constructor() {
    super("Asset already exists");
  }
}

export { AssetAlreadyExists };
