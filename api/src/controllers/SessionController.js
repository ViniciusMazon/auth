import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      return response
        .status(401)
        .json({ message: 'Invalid email or password' });
    }

    return response.status(200).json({
      token: `Bearer ${jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: '7d',
      })}`,
    });
  }
}

export default new SessionController();
