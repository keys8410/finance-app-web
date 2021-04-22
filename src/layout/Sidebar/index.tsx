import { useMediaQuery } from 'atomic-layout';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <>{isMobile ? <MobileSidebar /> : <DesktopSidebar />}</>;
};

export default Sidebar;
