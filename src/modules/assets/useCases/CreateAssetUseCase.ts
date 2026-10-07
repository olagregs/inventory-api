import { randomUUID } from "node:crypto";
import { Either, fail, success } from "@shared/config/types/either.js";
import { AssetDTO, CreateAssetDTO } from "../dto/AssetDTO.js";
import { AssetAlreadyExists } from "../errors/AssetAlreadyExists.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class CreateAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(data: CreateAssetDTO): Promise<Either<AssetAlreadyExists, AssetDTO>> {
    const existingAsset = this.repository.find(data);

    if (existingAsset) {
      return fail(new AssetAlreadyExists());
    }

    const asset = this.repository.create({
      id: randomUUID(),
      ...data,
    });

    return success(asset);
  }
}

export { CreateAssetUseCase };
