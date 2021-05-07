import { useCallback, useState } from 'react';
import { useAuth } from '../../../contexts/authProvider';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import ThemeToggleButton from '../../ThemeToggleButton';
import ListIconSidebar from '../IconSidebar/List';
import { CompositionContainer } from '../styles';
import { MenuButton } from './MenuIcon/styles';

import { MobileMenuButton, MobileMenuDropdown } from './styles';

const MobileSidebar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(true);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <CompositionContainer>
      <DirectionalContainer direction="row">
        <DirectionalContainer direction="row" justify="flex-start">
          <MobileMenuButton onClick={handleOpen}>
            <MenuButton active={!open} />
          </MobileMenuButton>

          {user?.nome}
        </DirectionalContainer>

        <ThemeToggleButton />
      </DirectionalContainer>

      <MobileMenuDropdown opened={open}>
        <ListIconSidebar onClose={handleClose} />
      </MobileMenuDropdown>
    </CompositionContainer>
  );
};

export default MobileSidebar;
