import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';

Yup.setLocale(pt);

export const schema = Yup.object({
  email: Yup.string()
    .min(2, 'E-mail muito curto')
    .email('O e-mail digitado é inválido.')
    .max(350, 'O e-mail digitado é muito longo.')
    .required('O e-mail é obrigatório.'),
});
