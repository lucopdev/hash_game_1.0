import dotenv from 'dotenv';
import { Request, Response } from 'express';
import connectDB, { prisma } from '../lib/connectDB';

dotenv.config();
connectDB();

const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  const allUsers = await prisma.user.findMany();

  return res.status(200).json(allUsers);
  console.log(process.env.DATABASE_URL);
  return res.status(200).json({ ok: 'users' });
};

const createUser = async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ user: 'user1' });
};

export default {
  getAllUsers,
  createUser,
};
