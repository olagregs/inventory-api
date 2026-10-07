import { AssetDTO, UpdateAssetDTO } from "../dto/AssetDTO.js";
import { Asset } from "../entities/Asset.js";

interface IAssetRepository {
  create(data: AssetDTO): Asset;
  findBySerial(serialNumber: string): Asset | undefined;
  findByTag(tag: string): Asset | undefined;
  list(): Asset[];
  update(asset: Asset, data: UpdateAssetDTO): Asset;
}

export { IAssetRepository };
