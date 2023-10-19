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
    return res.status(404).json({ message: 'User not found' });
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
    }
  };

  const user = await prisma.user.create(newUser);

  // return res.status(200).json(user);
  return res.status(200).json({ status: 'SUCCESSFUL', message: `User ${username} is registered.`});
};

export default {
  getAllUsers,
  createUser,
};
