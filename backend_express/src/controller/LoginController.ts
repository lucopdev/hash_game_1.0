import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import connectDB, { prisma } from '../lib/connectDB';
import generateToken from '../utils/token';

dotenv.config();
connectDB();

const postLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const secretKey: string = process.env.SECRET || 'secret';

  // validation de username e password

  try {
    const user = await prisma.user.findFirstOrThrow({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: `${username} doesn't exist.` });
    }

    const token = generateToken(username, secretKey);
    process.env.TOKEN = token;

    return res
      .status(200)
      .json({ status: 'SUCCESSFUL', message: `User ${username} is logged.`, token });
  } catch (error) {
    return res.status(500).json({ status: 'ERROR', error });
  }
};

export default {
  postLogin,
};
