import { Composition } from 'atomic-layout';
import React from 'react';
import { FiArrowDown, FiCircle } from 'react-icons/fi';
import { CompositionContainer, ContainerSidebar } from './styles';
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
      templateRowsMd=".4fr 1fr"
      as={CompositionContainer}
    >
      {(Areas) => (
        <>
          <Areas.Logo>
            <FiCircle />
          </Areas.Logo>
          <Areas.Icons>
            <ContainerSidebar>
              <FiArrowDown />
              <FiArrowDown />
              <FiArrowDown />
              <FiArrowDown />
            </ContainerSidebar>
          </Areas.Icons>
        </>
      )}
    </Composition>
  );
};

export default Sidebar;
