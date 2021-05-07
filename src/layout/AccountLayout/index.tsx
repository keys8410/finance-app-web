import { ReactNode } from 'react';
import { Composition, useMediaQuery } from 'atomic-layout';

import { WithChildren } from '../../@types/withChildren';
import { Aside, Main, ContainerLayout, CompositionContainer } from './styles';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { FcDoughnutChart } from 'react-icons/fc';

const areasMobile = `
sidebar 
login
`;

const areasDesktop = `
sidebar login
`;

interface Props {
  aside: ReactNode;
}
const AccountLayout = ({ aside, children }: WithChildren<Props>) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ContainerLayout isMobile={isMobile}>
      <Composition
        template={areasMobile}
        templateMd={areasDesktop}
        templateCols="1fr"
        templateColsMd="1fr .7fr"
        as={CompositionContainer}
        minHeightMd="80%"
        maxWidthMd="82%"
        minWidthMd="82%"
        minWidth="90%"
        maxWidth="90%"
        justifyItems="stretch"
      >
        {(Areas) => (
          <>
            <Areas.Sidebar as={Aside}>
              {aside}
              <footer>
                <DirectionalContainer direction="row">
                  <FcDoughnutChart size="2.5rem" />
                  Finance App
                </DirectionalContainer>
              </footer>
            </Areas.Sidebar>
            <Areas.Login as={Main}>{children}</Areas.Login>
          </>
        )}
      </Composition>
    </ContainerLayout>
  );
};

export default AccountLayout;
