// upload file setup

import multer from 'multer';
import crypto from 'crypto'; // generated random characters
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        // i.e: u11u3g71381j.png
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
