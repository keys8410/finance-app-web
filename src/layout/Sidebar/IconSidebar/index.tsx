import React from 'react';
import { WrapperIcon } from './styles';

type Position = 'right' | 'left';
type Direction = 'start' | 'end';

type Props = {
  icon?: string | React.ReactNode;
  bgColor?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  active: boolean;
};

const IconSidebar = ({ icon, active }: Props) => {
  return <WrapperIcon active={active}>{icon}</WrapperIcon>;
};

export default IconSidebar;
