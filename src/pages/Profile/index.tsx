import { useMediaQuery } from 'atomic-layout';
import { useAuth } from '../../contexts/authProvider';
import {
  CardBordered,
  CardBorderedContent,
  GridTemplate,
} from '../../styles/global';
import FormProfile from './form-profile';
import md5 from 'md5';
import { ImageProfile } from './styles';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import Tooltip from '../../components/Utils/Tooltip';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import TrocarSenha from '../../components/Modal/Contents/TrocarSenha';

const Profile = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(
      ModalActions.setContent({
        opened: true,
        enabledToClose: true,
        title: `Alterar Senha`,
        content: <TrocarSenha />,
      })
    );
  }, [dispatch]);

  return (
    <CardBordered>
      <CardBorderedContent>
        <GridTemplate
          customColumns={isMobile ? '1fr' : '1fr 2.5fr '}
          gap={isMobile ? '1rem' : '3rem '}
        >
          <DirectionalContainer
            height
            align={isMobile ? 'center' : 'flex-start'}
          >
            <Tooltip
              dataFor="imagemPerfil"
              place="bottom"
              content={<p>Clique para alterar a senha</p>}
              onClick={openModal}
            >
              <ImageProfile
                onClick={openModal}
                src={`https://www.gravatar.com/avatar/${md5(
                  user?.email ?? ''
                )}?d=retro&s=${isMobile ? 280 : 350}`}
              />
            </Tooltip>
          </DirectionalContainer>

          <FormProfile />
        </GridTemplate>
      </CardBorderedContent>
    </CardBordered>
  );
};
export default Profile;
