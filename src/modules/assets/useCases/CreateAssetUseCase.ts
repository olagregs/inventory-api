import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO } from "../dto/AssetDTO.js";
import { AssetAlreadyExists } from "../errors/AssetAlreadyExists.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";
import { Asset } from "../entities/Asset.js";

class CreateAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: AssetDTO): Promise<Either<AssetAlreadyExists, Asset>> {
    const existingAsset = await this.repository.findBySerial(data.serialNumber);

    if (existingAsset) {
      return fail(new AssetAlreadyExists());
    }

    const asset = await this.repository.create({
      ...data,
    });

    return success(asset);
  }
}

export { CreateAssetUseCase };
