import { z } from 'zod';

const EquipmentSchema = z.object({
  id: z.number(),
  model: z.string(),
  tag_id: z.string(),
  serialNumber: z.string(),
  status: z.string(),
  location: z.string()
});

const UpdateEquipmentSchema = z.object({
  params: z.object({
    serialNumber: z.string()
  }),
  body: z.object({
    status: z.string(),
    location: z.string()
  })
});

const FindEquipmentSchema = EquipmentSchema.pick({ serialNumber: true });

type EquipmentDTO = z.infer<typeof EquipmentSchema>
type UpdateEquipmentDTO = z.infer<typeof UpdateEquipmentSchema>
type FindEquipmentDTO = z.infer<typeof FindEquipmentSchema>

export { EquipmentSchema, UpdateEquipmentSchema, FindEquipmentSchema, EquipmentDTO, FindEquipmentDTO, UpdateEquipmentDTO }