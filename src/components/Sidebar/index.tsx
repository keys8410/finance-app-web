import { Composition } from 'atomic-layout';
import React from 'react';
import { FcDoughnutChart } from 'react-icons/fc';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import ListIconSidebar from './IconSidebar/List';

import { CompositionContainer } from './styles';

const areasMobile = `
logo icons`;
const areasDesktop = `
logo
icons`;

const Sidebar = () => {
  return (
    <Composition
      template={areasMobile}
      templateMd={areasDesktop}
      templateCols="1fr"
      templateRowsMd="auto 1fr"
      as={CompositionContainer}
    >
      {(Areas) => (
        <>
          <Areas.Logo>
            <DirectionalContainer>
              <FcDoughnutChart size="4rem" />
            </DirectionalContainer>
          </Areas.Logo>
          <Areas.Icons>
            <DirectionalContainer>
              <ListIconSidebar />
            </DirectionalContainer>
          </Areas.Icons>
        </>
      )}
    </Composition>
  );
};

export default Sidebar;
