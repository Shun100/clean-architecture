import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/', async (_req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});