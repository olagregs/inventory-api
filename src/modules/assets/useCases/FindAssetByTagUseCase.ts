import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO, FindAssetByTagDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class FindAssetByTagUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: FindAssetByTagDTO): Promise<Either<AssetNotFound, AssetDTO>> {
    const asset = this.repository.findByTag(data.tag);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    return success(asset);
  }
}

export { FindAssetByTagUseCase };
