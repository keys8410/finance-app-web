import FormLogin from './form-cadastro';
import { AsideTitle, AsideSubtitle, MainSubtitle } from './styles';

import LoginAside from '../../../assets/svg/login-aside.svg';
import AccountLayout from '../../../layout/AccountLayout';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import LoginSvg from '../../../assets/svg/login.svg';
import { useHistory } from 'react-router';
import Modal from '../../../components/Modal';

const SignUp = () => {
  const history = useHistory();

  return (
    <>
      <AccountLayout
        aside={
          <>
            <AsideTitle>Hora de transformar suas finanças.</AsideTitle>

            <img src={LoginAside} width="90%" />

            <AsideSubtitle style={{ maxWidth: 525 }}>
              O caminho está a sua frente. Você já deu seu primeiro passo rumo à
              transformação financeira e nós te guiaremos nessa jornada.
            </AsideSubtitle>
          </>
        }
      >
        <DirectionalContainer height justify="space-between">
          <DirectionalContainer>
            <img src={LoginSvg} width="50%" style={{ marginBottom: '2rem' }} />

            <AsideSubtitle style={{ fontSize: '2rem' }}>
              Seja bem-vinde ao
            </AsideSubtitle>

            <AsideTitle style={{ fontSize: '2rem' }}>Finance App</AsideTitle>
          </DirectionalContainer>

          <FormLogin />

          <MainSubtitle bold>
            Já possui uma conta?{' '}
            <span onClick={() => history.push('/login')}>Faça login!</span>
          </MainSubtitle>
        </DirectionalContainer>
      </AccountLayout>

      <Modal />
    </>
  );
};

export default SignUp;
