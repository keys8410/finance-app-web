import React from 'react';
import { Content, IconContent } from './styles';

type Position = 'right' | 'left';
type Direction = 'start' | 'end';

type Props = {
  icon?: string | React.ReactNode;
  position?: Position;
  direction?: Direction;
  text?: string;
  maxSize?: boolean;
  minSize?: boolean;
  isAvatar?: boolean;
  bgColor?: string;
  navHeader?: boolean;
  backgroundSize?: string;
  backgroundPosition?: string;
};

const ifTextExist = (text: string) => {
  return <span>{text}</span>;
};

/**
 *
 * @param icon - if parameter not passed, the default will be the dollar symbol
 */

const Icon: React.FC<Props> = ({
  icon,
  position,
  direction,
  text,
  maxSize,
  minSize,
  bgColor,
  isAvatar,
  navHeader,
  backgroundPosition,
  backgroundSize,
}) => {
  return (
    <Content navHeader={navHeader} position={position} direction={direction}>
      {text && direction === 'end' && ifTextExist(text)}
      <IconContent
        maxSize={maxSize}
        minSize={minSize}
        isAvatar={isAvatar}
        bgColor={bgColor}
        source={icon}
        backgroundPosition={backgroundPosition}
        backgroundSize={backgroundSize}
      />
      {text && direction === 'start' && ifTextExist(text)}
    </Content>
  );
};

export default Icon;
