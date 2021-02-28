import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'E-mail muito curto')
    .email('O e-mail digitado é inválido.')
    .max(500, 'O e-mail digitado é muito longo.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(2, 'Senha muito curta.')
    .required('A senha é obrigatória.'),
});
