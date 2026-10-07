class AssetNotFound extends Error {
  readonly statusCode = 404;

  constructor() {
    super("Asset not found");
  }
}

export { AssetNotFound };
