import { MouseEvent, useCallback, useState } from 'react';
import { FcDoughnutChart } from 'react-icons/fc';
import { useAuth } from '../../../contexts/authProvider';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import ThemeToggleButton from '../../ThemeToggleButton';
import ListIconSidebar from '../IconSidebar/List';
import { CompositionContainer } from '../styles';
import { MenuButton } from './MenuIcon/styles';

import { MobileMenuButton, MobileMenuDropdown } from './styles';

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [iconMenu, setIconMenu] = useState(false);

  const { user } = useAuth();

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const showIconMenu = useCallback(() => {
    setIconMenu(true);
  }, []);

  const unshowIconMenu = useCallback(() => {
    setIconMenu(false);
  }, []);

  return (
    <CompositionContainer>
      <DirectionalContainer direction="row">
        <DirectionalContainer direction="row" justify="flex-start">
          <MobileMenuButton
            onClick={() => setOpen(!open)}
            onMouseOver={showIconMenu}
            onMouseLeave={unshowIconMenu}
          >
            {iconMenu || !open ? (
              <MenuButton active={open} />
            ) : (
              <FcDoughnutChart size="4rem" />
            )}
          </MobileMenuButton>

          {user?.nome}
        </DirectionalContainer>

        <ThemeToggleButton />
      </DirectionalContainer>

      <MobileMenuDropdown opened={open}>
        <ListIconSidebar onClose={closeMenu} />
      </MobileMenuDropdown>
    </CompositionContainer>
  );
};

export default MobileSidebar;
