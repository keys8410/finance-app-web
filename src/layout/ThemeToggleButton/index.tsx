import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useThemeToggle } from '../../contexts/ThemeToggleProvider';

const ThemeToggleButton = () => {
  const { scheme, toggleColorSchema } = useThemeToggle();

  return (
    <DarkModeSwitch
      checked={scheme === 'light' ? false : true}
      onChange={toggleColorSchema}
      size={25}
    />
  );
};

export default ThemeToggleButton;
