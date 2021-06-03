import { useEffect } from 'react';
import navigation from '../layout/Sidebar/router';
import { Composition, useMediaQuery } from 'atomic-layout';
import { CompositionContainer, ContainerPages } from './styles';
import CommonRoutes from '../routes/routes.common';
import Title from '../components/Utils/Title';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useHistory } from 'react-router-dom';
import { TituloActions } from '../store/modules/titulo/actions/handle';
import { useDispatch } from 'react-redux';
import { DirectionalContainer } from '../styles/DirectionalContainer';
import { useAuth } from '../contexts/authProvider';
import Modal from '../components/Modal';
import ThemeToggleButton from '../layout/ThemeToggleButton';
import MobileSidebar from '../layout/Sidebar/MobileSidebar';
import DesktopSidebar from '../layout/Sidebar/DesktopSidebar';

const areasMobile = `
sidebar 
app 
`;

const areasDesktop = `
sidebar titulo usuario
sidebar app app
`;
const Pages = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const history = useHistory();
  const dispatch = useDispatch();
  const { titulo } = useTypedSelector((states) => states.titulo.handle);

  useEffect(() => {
    navigation.map((nav) => {
      if (history.location.pathname.includes(nav.to)) {
        dispatch(TituloActions.changeTitle({ titulo: nav.name }));
      }
    });
  }, [dispatch, history]);

  const { user } = useAuth();

  return (
    <>
      <ContainerPages isMobile={isMobile}>
        <Composition
          template={areasMobile}
          templateMd={areasDesktop}
          gap={15}
          gapMd={25}
          templateCols="1fr"
          templateColsMd="auto 1fr auto"
          templateRowsMd="auto 1fr"
          maxWidth="98%"
          minHeightMd="20rem"
          maxWidthMd="91%"
          minWidthMd="91%"
          as={CompositionContainer}
          justifyItems="stretch"
        >
          {(Areas) => (
            <>
              <Areas.Sidebar>
                {isMobile ? <MobileSidebar /> : <DesktopSidebar />}
              </Areas.Sidebar>
              <Areas.Titulo>
                <DirectionalContainer
                  align="center"
                  justify="flex-start"
                  direction="row"
                  height
                >
                  <Title isTitle>{titulo}</Title>
                </DirectionalContainer>
              </Areas.Titulo>

              <Areas.Usuario>
                <DirectionalContainer direction="row">
                  {user?.apelido ?? user?.nome} <ThemeToggleButton />
                </DirectionalContainer>
              </Areas.Usuario>

              <Areas.App>
                <CommonRoutes />
              </Areas.App>
            </>
          )}
        </Composition>
      </ContainerPages>
    </>
  );
};

export default Pages;
