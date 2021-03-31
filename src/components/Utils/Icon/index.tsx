import React from 'react';
import { IconContent, SubIconContent } from './styles';

type Props = {
  icon?: string | React.ReactNode;
  subIcon?: string | React.ReactNode;
  maxSize?: boolean;
  minSize?: boolean;
  bgColor?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
};

/**
 *
 * @param icon - if parameter not passed, the default will be the dollar symbol
 */
const Icon = ({
  icon,
  maxSize,
  minSize,
  bgColor,
  backgroundPosition,
  backgroundSize,
  subIcon,
}: Props) => {
  return (
    <IconContent
      maxSize={maxSize}
      minSize={minSize}
      bgColor={bgColor}
      source={icon}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
    >
      {subIcon && <SubIconContent>{subIcon}</SubIconContent>}
    </IconContent>
  );
};

export default Icon;
