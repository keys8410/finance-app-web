import React from 'react';
import { DefaultSubtitle } from './styles';

type Props = {
  color?: string;
  bold?: boolean;
  marginBottom?: number;
  children: string | React.ReactNode;
};

/**
 *
 * @param marginBottom - marginBottom size receives a number and takes rem
 */
const Subtitle: React.FC<Props> = ({ color, bold, children, marginBottom }) => {
  return (
    <DefaultSubtitle color={color} bold={bold} marginBottom={marginBottom}>
      {children}
    </DefaultSubtitle>
  );
};

export default Subtitle;
