import express, { Request, Response } from 'express';
import { z } from 'zod';

const app = express();

app.use(express.json());

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

type Equipment = z.infer<typeof EquipmentSchema>

const inventory: Equipment[]  = [];

app.post("/equipment", (request: Request, response: Response) => {
  const result = EquipmentSchema.safeParse(request.body);

  if (!result.success) {
    const error = result.error;

    return response.status(400).json({
      Error: error.issues.map(issue => issue.message)
    }); 
  }

  inventory.push(result.data);

  return response.status(201).json(result.data);
});

app.get("/equipment/:serialNumber", (request: Request, response: Response) => {
  const subSchema = EquipmentSchema.pick({ serialNumber: true });

  const query = subSchema.safeParse(request.params);

  if(!query.success) {
    const error = query.error;

    return response.status(400).json({
      Error: error.issues[0]?.message
    });
  }

  const equipment = inventory.find(item => item.serialNumber === query.data.serialNumber);

  if (!equipment) {
    return response.status(404).json({
      Error: "Equipment does not exist!"
    });
  }

  return response.status(200).json(equipment);
});

app.get("/equipment", (_request: Request, response: Response) => {
  return response.status(200).json(inventory);
});

app.patch("/equipment/:serialNumber", (request: Request, response: Response) => {
  const subSchema = UpdateEquipmentSchema;

  const result = subSchema.safeParse({
    params: (request.params),
    body: (request.body)
  });

  if(!result.success) {
    const error = result.error;

    return response.status(400).json({
      Error: error.issues.map(issue => issue.message)
    });
  }

  const equipment = inventory.find(item => item.serialNumber === result.data.params.serialNumber);

  if(!equipment) {
    return response.status(404).json({ 
      Error: "Equipment does not exist!"
    });
  }

  equipment.status = result.data.body.status;
  equipment.location = result.data.body.location;

  response.status(200).json(equipment);
});

app.delete("/equipment/:serialNumber", (request: Request, response: Response) => {
  const subSchema = EquipmentSchema.pick({ serialNumber: true });

  const query = subSchema.safeParse(request.params);

  if(!query.success) {
    const error = query.error;

    return response.status(400).json({
      Error: error.issues[0]?.message
    });
  }

  const equipmentIndex = inventory.findIndex(item => item.serialNumber === query.data.serialNumber);

  if(equipmentIndex === -1) {
    return response.status(404).json({
      Error: "Equipment does not exist!"
    });
  }

  inventory.splice(equipmentIndex, 1);

  return response.status(204).send();
});

export { app }