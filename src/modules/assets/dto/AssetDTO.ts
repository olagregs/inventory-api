import { z } from "zod";

const AssetSchema = z.object({
  id: z.string(),
  model: z.string(),
  tagId: z.string(),
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
const FindAssetSchema = AssetSchema.pick({ serialNumber: true });

type AssetDTO = z.infer<typeof AssetSchema>;
type CreateAssetDTO = z.infer<typeof CreateAssetSchema>;
type UpdateAssetDTO = z.infer<typeof UpdateAssetSchema>;
type FindAssetDTO = z.infer<typeof FindAssetSchema>;

export {
  AssetSchema,
  CreateAssetSchema,
  CreateAssetDTO,
  UpdateAssetSchema,
  FindAssetSchema,
  AssetDTO,
  FindAssetDTO,
  UpdateAssetDTO,
};
