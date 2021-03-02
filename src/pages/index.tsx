import React, { useEffect } from 'react';
import navigation from './../components/Sidebar/navigation';
import { Composition, useMediaQuery } from 'atomic-layout';
import { CompositionContainer, ContainerPages } from './styles';
import Sidebar from '../components/Sidebar';
import CommonRoutes from '../routes/routes.common';
import Title from '../components/Utils/Title';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useHistory } from 'react-router-dom';
import { TituloActions } from '../store/modules/titulo/actions/handle';
import { useDispatch } from 'react-redux';
import { DirectionalContainer } from '../styles/DirectionalContainer';
import { useAuth } from '../contexts/authProvider';

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
    <ContainerPages isMobile={isMobile}>
      <Composition
        template={areasMobile}
        templateMd={areasDesktop}
        gap={10}
        gapMd={25}
        templateCols="1fr"
        templateColsMd="auto 1fr auto"
        templateRowsMd="auto 1fr"
        maxWidth="98%"
        minHeightMd="20rem"
        maxWidthMd="75%"
        minWidthMd="75%"
        as={CompositionContainer}
      >
        {(Areas) => (
          <>
            <Areas.Sidebar>
              <Sidebar />
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
            <Areas.Usuario>{user?.nome}</Areas.Usuario>
            <Areas.App>
              <CommonRoutes />
            </Areas.App>
          </>
        )}
      </Composition>
    </ContainerPages>
  );
};

export default Pages;

/**
 *  
    areas={areasMobile}
    templateMd={areasDesktop}
    gap={22}
    gapMd={0}
    templateCols="1fr"
    templateRows="auto 1fr"
    templateColsMd="1.25fr 4fr"
    templateColsLg="1.25fr 4fr"
    templateRowsMd="minmax(100px, 1fr)"
    templateRowsLg="minmax(100px, 1fr)"
    padding={0}
    minWidth="95%"
    maxWidth="98%"
    minHeight="43rem"
    maxWidthMd="90%"
    minWidthMd="90%"
 */
