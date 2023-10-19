import dotenv from 'dotenv';
import { Request, Response } from 'express';
import connectDB, { prisma } from '../lib/connectDB';
import IUserBody from '../interfaces/IUserBody';
import INewUser from '../interfaces/INewUser';

dotenv.config();
connectDB();

const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  const users = await prisma.user.findMany();
  if (!users) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const userResponse = users.map((user) => {
    return {
      username: user.username,
      created_at: user.createdAt,
    };
  });

  return res.status(200).json(userResponse);
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, password }: IUserBody = req.body;

  const newUser: INewUser = {
    data: {
      username: username,
      password: password,
    },
  };

  const user = await prisma.user.create(newUser);
  const userResponse = {
    id: user.id,
    username: user.username,
    user_score: user.user_score,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }

  return res.status(200).json({ status: 'SUCCESSFUL', data: userResponse });
};

export default {
  getAllUsers,
  createUser,
};
