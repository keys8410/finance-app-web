import React from 'react';

import { Composition, useMediaQuery } from 'atomic-layout';
import { CompositionContainer, ContainerPages } from './styles';
import Sidebar from '../components/Sidebar';

const areasMobile = `
sidebar 
app 
`;

const areasDesktop = `
sidebar titulo usuario
sidebar app app
sidebar app app
`;
const Pages = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ContainerPages isMobile={isMobile}>
      <Composition
        template={areasMobile}
        templateMd={areasDesktop}
        gap={10}
        gapMd={20}
        templateCols="1fr"
        templateColsMd="auto 1fr auto"
        maxWidth="98%"
        maxWidthMd="90%"
        minWidthMd="90%"
        as={CompositionContainer}
      >
        {(Areas) => (
          <>
            <Areas.Sidebar>
              <Sidebar />
            </Areas.Sidebar>
            <Areas.Titulo>Titulo</Areas.Titulo>
            <Areas.Usuario>Usuario</Areas.Usuario>
            <Areas.App>App</Areas.App>
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
