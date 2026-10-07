import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO, FindAssetDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class FindAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: FindAssetDTO): Promise<Either<AssetNotFound, AssetDTO>> {
    const asset = this.repository.find(data);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    return success(asset);
  }
}

export { FindAssetUseCase };
