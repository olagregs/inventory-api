import { AssetDTO } from "../dto/AssetDTO.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class ListAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(): Promise<AssetDTO[]> {
    return this.repository.list();
  }
}

export { ListAssetUseCase };
