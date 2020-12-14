import { Request, Response } from 'express';

import User, { IUser } from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const newUser = {
      name,
      email,
      password,
    };

    const userData: IUser = await User.create(newUser);

    return response.status(201).json({ id: userData._id });
  }
}

export default new UserController();
