import 'dotenv/config';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;
    const userData = await User.findOne({ email });

    if (!userData) {
      return response.status(400).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userData.passwordHash as string
    );

    if (!isPasswordCorrect) {
      return response
        .status(401)
        .json({ message: 'Invalid email or password' });
    }

    return response.status(200).json({
      token: `Bearer ${jwt.sign(
        { userId: userData._id },
        process.env.SECRET as string,
        {
          expiresIn: '7d',
        }
      )}`,
      user: {
        name: userData.name,
        email: userData.email,
      },
    });
  }
}

export default new SessionController();
