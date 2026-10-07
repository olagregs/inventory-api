import { z } from "zod";

const AssetSchema = z.object({
  id: z.string(),
  model: z.string(),
  tag: z.string(),
  serialNumber: z.string(),
  status: z.string(),
  location: z.string(),
});

const UpdateAssetSchema = z.object({
  params: z.object({
    serialNumber: z.string(),
  }),
  body: z.object({
    status: z.string(),
    location: z.string(),
  }),
});

const CreateAssetSchema = AssetSchema.omit({
  id: true,
});
const FindAssetBySerialSchema = AssetSchema.pick({ serialNumber: true });
const FindAssetByTagSchema = AssetSchema.pick({ tag: true });

type AssetDTO = z.infer<typeof AssetSchema>;
type CreateAssetDTO = z.infer<typeof CreateAssetSchema>;
type UpdateAssetDTO = z.infer<typeof UpdateAssetSchema>;
type FindAssetBySerialDTO = z.infer<typeof FindAssetBySerialSchema>;
type FindAssetByTagDTO = z.infer<typeof FindAssetByTagSchema>;

export {
  AssetSchema,
  CreateAssetSchema,
  CreateAssetDTO,
  UpdateAssetSchema,
  FindAssetBySerialSchema,
  FindAssetByTagSchema,
  AssetDTO,
  FindAssetBySerialDTO,
  FindAssetByTagDTO,
  UpdateAssetDTO,
};
