import { useMediaQuery } from 'atomic-layout';
import React from 'react';
import { WrapperIcon, WrapperIconWithText } from './styles';

type Props = {
  icon?: string | React.ReactNode;
  bgColor?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  active: boolean;
  title: string;
};

const IconSidebar = ({ icon, active, title }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <WrapperIconWithText active={isMobile && active}>
      <WrapperIcon active={active}>{icon}</WrapperIcon>
      {isMobile && <span>{title}</span>}
    </WrapperIconWithText>
  );
};

export default IconSidebar;
