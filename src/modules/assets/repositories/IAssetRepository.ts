import { AssetDTO, FindAssetDTO, UpdateAssetDTO } from "../dto/AssetDTO.js";
import { Asset } from "../entities/Asset.js";

interface IAssetRepository {
  create(data: AssetDTO): Asset;
  find(data: FindAssetDTO): Asset | undefined;
  list(): Asset[];
  update(Asset: Asset, data: UpdateAssetDTO): Asset;
  delete(data: FindAssetDTO): void;
}

export { IAssetRepository };
