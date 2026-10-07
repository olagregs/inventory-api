import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO, UpdateAssetDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class UpdateAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: UpdateAssetDTO): Promise<Either<AssetNotFound, AssetDTO>> {
    const asset = this.repository.findBySerial(data.params.serialNumber);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    return success(this.repository.update(asset, data));
  }
}

export { UpdateAssetUseCase };
