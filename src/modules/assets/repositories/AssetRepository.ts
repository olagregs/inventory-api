import { AssetDTO, UpdateAssetDTO } from "../dto/AssetDTO.js";
import { Asset } from "../entities/Asset.js";
import { IAssetRepository } from "./IAssetRepository.js";

class AssetRepository implements IAssetRepository {
  private inventory: Asset[] = [];

  create(data: AssetDTO): Asset {
    this.inventory.push(data);

    return data;
  }

  findBySerial(serialNumber: string): Asset | undefined {
    const asset = this.inventory.find((item) => item.serialNumber === serialNumber);

    return asset;
  }

  findByTag(tag: string): Asset | undefined {
    const asset = this.inventory.find((item) => item.tag === tag);

    return asset;
  }

  list(): Asset[] {
    return this.inventory;
  }

  update(asset: Asset, data: UpdateAssetDTO): Asset {
    asset.status = data.body.status;
    asset.location = data.body.location;

    return asset;
  }
}

export { AssetRepository };
