import * as Yup from 'yup';

export const createUser = async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('nome é um campo obrigatório'),
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

export const updateUser = async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('nome é um campo obrigatório'),
    email: Yup.string()
      .email('E-mail está inválido')
      .required('e-mail é um campo obrigatório'),
    oldPassword: Yup.string()
      .min(6, 'A senha deve ter entre 6-10 caracteres')
      .max(10, 'A senha deve ter entre 6-10 caracteres'),
    password: Yup.string()
      .min(6, 'A senha deve ter entre 6-10 caracteres')
      .max(10, 'A senha deve ter entre 6-10 caracteres')
      .when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required('Você deve informar a senha') : field
      ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('Você deve confirmar a senha')
            .oneOf([Yup.ref('password')])
        : field
    ),
  });

  try {
    /* it's necessary to send the body */
    // eslint-disable-next-line no-throw-literal
    if (Object.keys(req.body).length === 0) throw 'Body não enviado';

    await schema.validate(req.body, { abortEarly: true });
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
