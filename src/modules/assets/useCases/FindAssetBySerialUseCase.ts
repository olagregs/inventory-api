import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO, FindAssetBySerialDTO } from "../dto/AssetDTO.js";
import { AssetNotFound } from "../errors/AssetNotFound.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class FindAssetBySerialUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: FindAssetBySerialDTO): Promise<Either<AssetNotFound, AssetDTO>> {
    const asset = this.repository.findBySerial(data.serialNumber);

    if (!asset) {
      return fail(new AssetNotFound());
    }

    return success(asset);
  }
}

export { FindAssetBySerialUseCase };
