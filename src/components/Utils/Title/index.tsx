import React from 'react';
import { DefaultTitle } from './styles';

type Props = {
  color?: string;
  bold?: boolean;
  capitalize?: boolean;
  marginBottom?: number;
  isTitle?: boolean;
  children: string | React.ReactNode;
};

/**
 *
 * @param marginBottom - marginBottom size receives a number and takes rem
 */
const Title: React.FC<Props> = ({
  color,
  bold,
  capitalize,
  children,
  marginBottom,
  isTitle,
}) => {
  return (
    <DefaultTitle
      capitalize={capitalize}
      color={color}
      bold={bold}
      marginBottom={marginBottom}
      isTitle={isTitle}
    >
      {children}
    </DefaultTitle>
  );
};

export default Title;
