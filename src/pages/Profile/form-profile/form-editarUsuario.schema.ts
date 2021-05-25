import * as Yup from 'yup';

export const editarUsuarioSchema = Yup.object().shape({
  nome: Yup.string()
    .required('O Nome é obrigatório.')
    .min(2, 'Nome é muito curto.')
    .max(255, 'O e-mail digitado é muito longo.'),
  email: Yup.string()
    .min(2, 'E-mail muito curto.')
    .email('O e-mail digitado é inválido.')
    .max(255, 'O e-mail digitado é muito longo.')
    .required('O e-mail é obrigatório.'),
});
