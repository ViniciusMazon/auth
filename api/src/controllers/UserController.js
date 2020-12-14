import User from '../models/User';

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return response.status(201).json({ id: user._id });
  }
}

export default new UserController();
