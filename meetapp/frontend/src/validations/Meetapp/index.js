import * as Yup from 'yup';

const schema = Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner é Obrigatório'),
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.string().required('Data é obrigatória'),
  location: Yup.string().required('Localização é obrigatória'),
});

export default schema;
