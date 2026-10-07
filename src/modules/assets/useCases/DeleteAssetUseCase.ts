import { Either, fail, success } from "@shared/config/types/either.js";
import { FindAssetDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class DeleteAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: FindAssetDTO): Promise<Either<AssetNotFound, void>> {
    const Asset = this.repository.find(data);

    if (!Asset) {
      return fail(new AssetNotFound());
    }

    this.repository.delete(data);

    return success(undefined);
  }
}

export { DeleteAssetUseCase };
