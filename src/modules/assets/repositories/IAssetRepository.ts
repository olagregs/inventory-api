import { AssetDTO } from "../dto/AssetDTO.js";
import { Asset } from "../entities/Asset.js";

interface IAssetRepository {
  create(data: AssetDTO): Promise<Asset>;
  findBySerial(serialNumber: string): Promise<Asset | undefined>;
  findByTag(tag: string): Promise<Asset | undefined>;
  list(): Promise<Asset[]>;
  update(asset: Asset): Promise<Asset | undefined>;
}

export { IAssetRepository };
