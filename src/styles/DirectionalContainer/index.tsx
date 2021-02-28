import React from 'react';
import { DirectionalTypes } from '../../@types/directionalContainer';
import { DirectionalContainerStyled } from './styles';

/**
 * @param direction default direction is column >
 *
 * 'row' | 'row-reverse' | 'column' | ' column-reverse'
 *
 * @param justify default justify is space-between >
 *
 * 'center' | 'start' | 'flex-start' | 'flex-end' | 'left' | 'normal' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
 *
 * @param align default align is center >
 *
 * 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial'| 'inherit'
 *
 * @param height height receives a boolean, but it is not necessary to put height={boolean} > if true, height receives 100% of parent
 */

type Props = DirectionalTypes & {
  style?: React.CSSProperties;
};
export const DirectionalContainer: React.FC<Props> = ({
  direction,
  justify,
  align,
  height,
  children,
  style,
}) => {
  return (
    <DirectionalContainerStyled
      direction={direction}
      justify={justify}
      align={align}
      height={height}
      style={style}
    >
      {children}
    </DirectionalContainerStyled>
  );
};
