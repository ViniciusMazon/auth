import User from "../models/User";

class UserController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.create({
      email,
      password,
    });

    return response.status(201).json({ id: user._id });
  }
}

export default new UserController();
