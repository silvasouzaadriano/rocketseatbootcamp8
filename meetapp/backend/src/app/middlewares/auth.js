import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import * as Yup from 'yup';
import authConfig from '../../config/auth';

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

export const authCreateSession = async (req, res, next) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('e-mail é um campo obrigatório'),
    password: Yup.string()
      .required('senha é um campo obrigatório')
      .min(6, 'A senha deve ter entre 6-10 caracteres')
      .max(10, 'A senha deve ter entre 6-10 caracteres'),
  });

  try {
    await schema.validate(req.body, { abortEarly: true });
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
