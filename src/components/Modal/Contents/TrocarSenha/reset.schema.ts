import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';

Yup.setLocale(pt);

export const schema = Yup.object({
  senhaAtual: Yup.string()
    .min(2, 'Nova senha muito curta')
    .required('A nova é obrigatória.'),

  novaSenha: Yup.string()
    .min(2, 'Nova senha muito curta')
    .max(350, 'Nova senha muito é longa.')
    .required('A Nova senha é obrigatória.'),
});
