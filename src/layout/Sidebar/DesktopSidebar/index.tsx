import { FcDoughnutChart } from 'react-icons/fc';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import ListIconSidebar from '../IconSidebar/List';
import { CompositionContainerSidebar } from '../styles';

const DesktopSidebar = () => {
  return (
    <CompositionContainerSidebar>
      <DirectionalContainer>
        <FcDoughnutChart size="4rem" />
      </DirectionalContainer>

      <DirectionalContainer height align="center" justify="center">
        <ListIconSidebar />
      </DirectionalContainer>
    </CompositionContainerSidebar>
  );
};

export default DesktopSidebar;
