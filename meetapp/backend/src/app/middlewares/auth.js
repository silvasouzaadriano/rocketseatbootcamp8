// This middleware will verify if the user is logged
// by using the token generated during session authentication

import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transform call back function in async await
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Get the token from authHeader
  const [, token] = authHeader.split(' ');

  // Validating token
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // This attribution will be used by update route on UserController.js
    // for know which user to be updated
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token is invalid' });
  }
};
