import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get("/user", (_request: Request, response: Response) => {
  response.status(200).json({
    message: "Route working..."
  });
});

export { app }