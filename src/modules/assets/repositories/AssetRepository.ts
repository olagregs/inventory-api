import { CollectionRowOf } from "@prisma/orm-postgres/orm-client";
import { db } from "../../../prisma/db.js";
import { AssetDTO } from "../dto/AssetDTO.js";
import { Asset } from "../entities/Asset.js";
import { IAssetRepository } from "./IAssetRepository.js";

class AssetRepository implements IAssetRepository {
  private toAsset(asset: CollectionRowOf<typeof db.orm.public.Asset>): Asset {
    return new Asset (
      asset.id,
      asset.model,
      asset.tag,
      asset.serial_number,
      asset.asset_type_id,
      asset.asset_status_id,
      asset.asset_location_id
    )
  }

  async create(data: AssetDTO): Promise<Asset> {
     return db.transaction(async (tx) => {
      const newAsset = await tx.orm.public.Asset.create({
        model: data.model,
        tag: data.tag,
        serial_number: data.serialNumber,
        asset_type_id: data.assetTypeId,
        asset_status_id: data.assetStatusId,
        asset_location_id: data.assetLocationId,
        created_at: new Date(),
        updated_at: new Date()
      });

      await tx.orm.public.AssetLogs.create({
        asset_id: newAsset.id,
        asset_status_id: newAsset.asset_status_id,
        asset_location_id: newAsset.asset_location_id,
        Action: "CREATED",
        created_at: new Date()
      });

      return this.toAsset(newAsset)
     });
  }

  async findBySerial(serialNumber: string): Promise<Asset | undefined> {
    const asset = await db.orm.public.Asset
      .where({ serial_number: serialNumber })
      .first()

    if(!asset) {
      return;
    }

    return this.toAsset(asset);
  }

  async findByTag(tag: string): Promise<Asset | undefined> {
    const asset = await db.orm.public.Asset
    .where({ tag })
    .first()

    if(!asset) {
      return;
    }

    return this.toAsset(asset);
  }

  async list(): Promise<Asset[]> {
    const rawAssets = await db.orm.public.Asset.all();

    const assets = rawAssets.map((raw) => this.toAsset(raw));

    return assets;
  }

  async update(asset: Asset): Promise<Asset | undefined > {
    return db.transaction(async (tx) => {
      const updatedAsset = await tx.orm.public.Asset
      .where({ id: asset.id })
      .update({
        asset_status_id: asset.assetStatusId,
        asset_location_id: asset.assetLocationId,
        updated_at: new Date()
      })

      if(!updatedAsset) return;

      await tx.orm.public.AssetLogs.create({
        asset_id: updatedAsset.id,
        asset_status_id: updatedAsset.asset_status_id,
        asset_location_id: updatedAsset.asset_location_id,
        Action: "UPDATED",
        created_at: new Date()
      });

      return this.toAsset(updatedAsset);
    });
  }
}

export { AssetRepository };
