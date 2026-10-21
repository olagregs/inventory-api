import { Either, fail, success } from "@shared/config/types/either.js";
import { FindAssetByTagDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";
import { Asset } from "../entities/Asset.js";

class FindAssetByTagUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: FindAssetByTagDTO): Promise<Either<AssetNotFound, Asset>> {
    const asset = await this.repository.findByTag(data.tag);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    return success(asset);
  }
}

export { FindAssetByTagUseCase };
