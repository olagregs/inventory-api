import { Either, fail, success } from "@shared/config/types/either.js";
import { UpdateAssetDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";
import { Asset } from "../entities/Asset.js";

class UpdateAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: UpdateAssetDTO): Promise<Either<AssetNotFound, Asset>> {
    const asset = await this.repository.findBySerial(data.params.serialNumber);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    asset.assetStatusId = data.body.assetStatusId;
    asset.assetLocationId = data.body.assetLocationId;

    const updatedAsset = await this.repository.update(asset);

    if (!updatedAsset) {
      return fail(new AssetNotFound());
    }

    return success(updatedAsset);
  }
}

export { UpdateAssetUseCase };
