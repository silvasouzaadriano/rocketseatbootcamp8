import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

// User authentication
class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Verifying if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Verifying if password match
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // Case user exists and password match
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
