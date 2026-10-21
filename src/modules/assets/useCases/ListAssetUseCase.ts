import { Asset } from "../entities/Asset.js";
import { IAssetRepository } from "../repositories/IAssetRepository.js";

class ListAssetUseCase {
  private repository: IAssetRepository;

  constructor(repository: IAssetRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Asset[]> {
    return this.repository.list();
  }
}

export { ListAssetUseCase };
