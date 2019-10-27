import * as Yup from 'yup';

const title = Yup.string().max(55, 'O título não pode exceder 55 caracters.');
const description = Yup.string().max(
  650,
  'A descrição tem que ter no máximo 650 caracteres.'
);
const location = Yup.string().max(
  150,
  'A localização não pode excer 150 caracteres!'
);
const date = Yup.date('Data inválida!');

export const createMeetapp = async (req, res, next) => {
  const schema = Yup.object().shape({
    title: title.required('O título não pode ser em branco!'),
    description: description.required('Descrição não pode ser em branco!'),
    location: location.required('A localização não pode ser em branco!'),
    date: date.required('A data não pode ser em branco.'),
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
    name: Yup.string(),
    email: Yup.string()
      .email('E-mail está inválido')
      .required('e-mail é um campo obrigatório'),
    oldPassword: Yup.string()
      .min(6, 'A senha deve ter entre 6-10 caracteres')
      .max(10, 'Password must be 6-10 characters'),
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
