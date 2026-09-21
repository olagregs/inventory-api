import { z } from "zod";

const EquipmentSchema = z.object({
  id: z.string(),
  model: z.string(),
  tagId: z.string(),
  serialNumber: z.string(),
  status: z.string(),
  location: z.string(),
});

const UpdateEquipmentSchema = z.object({
  params: z.object({
    serialNumber: z.string(),
  }),
  body: z.object({
    status: z.string(),
    location: z.string(),
  }),
});

const CreateEquipmentSchema = EquipmentSchema.omit({
  id: true,
});
const FindEquipmentSchema = EquipmentSchema.pick({ serialNumber: true });

type EquipmentDTO = z.infer<typeof EquipmentSchema>;
type CreateEquipmentDTO = z.infer<typeof CreateEquipmentSchema>;
type UpdateEquipmentDTO = z.infer<typeof UpdateEquipmentSchema>;
type FindEquipmentDTO = z.infer<typeof FindEquipmentSchema>;

export {
  EquipmentSchema,
  CreateEquipmentSchema,
  CreateEquipmentDTO,
  UpdateEquipmentSchema,
  FindEquipmentSchema,
  EquipmentDTO,
  FindEquipmentDTO,
  UpdateEquipmentDTO,
};
