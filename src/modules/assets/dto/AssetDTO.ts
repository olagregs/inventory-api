import { z } from "zod";

const AssetSchema = z.object({
  model: z.string(),
  tag: z.string(),
  serialNumber: z.string(),
  assetTypeId: z.string(),
  assetStatusId: z.string(),
  assetLocationId: z.string(),
});

const UpdateAssetSchema = z.object({
  params: z.object({
    serialNumber: z.string(),
  }),
  body: z.object({
    assetStatusId: z.string(),
    assetLocationId: z.string(),
  }),
});

const FindAssetBySerialSchema = AssetSchema.pick({ serialNumber: true });
const FindAssetByTagSchema = AssetSchema.pick({ tag: true });

type AssetDTO = z.infer<typeof AssetSchema>;
type UpdateAssetDTO = z.infer<typeof UpdateAssetSchema>;
type FindAssetBySerialDTO = z.infer<typeof FindAssetBySerialSchema>;
type FindAssetByTagDTO = z.infer<typeof FindAssetByTagSchema>;

export {
  AssetSchema,
  UpdateAssetSchema,
  FindAssetBySerialSchema,
  FindAssetByTagSchema,
  AssetDTO,
  FindAssetBySerialDTO,
  FindAssetByTagDTO,
  UpdateAssetDTO,
};
