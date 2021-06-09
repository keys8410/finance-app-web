import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ResetSenha } from '../../pages/account/login/styles';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import ResetarSenha from '../Modal/Contents/ResetarSenha';

const ResetPassword = () => {
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(
      ModalActions.setContent({
        opened: true,
        enabledToClose: true,
        title: `Solicitação`,
        content: <ResetarSenha />,
      })
    );
  }, [dispatch]);

  return (
    <ResetSenha onClick={openModal}>Esqueceu sua senha? Recupere!</ResetSenha>
  );
};

export default ResetPassword;
