import { BiMoon, BiSun } from 'react-icons/bi';
import { IconButton } from '../../Button';
import { useThemeToggle } from '../../../contexts/ThemeToggleProvider';

const ThemeToggleButton = () => {
  const { scheme, toggleColorSchema } = useThemeToggle();

  return (
    <IconButton onClick={toggleColorSchema}>
      {scheme === 'light' && <BiMoon />}
      {scheme === 'dark' && <BiSun />}
    </IconButton>
  );
};

export default ThemeToggleButton;
