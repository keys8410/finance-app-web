import React from 'react';
import ReactTooltip, { Effect, Place, Type } from 'react-tooltip';
import { WithChildren } from '../../../@types/withChildren';

type PropTypes = {
  dataFor: any;
  type?: Type;
  effect?: Effect;
  place?: Place;
  content: string | React.ReactNode;
  style?: React.CSSProperties | undefined;
  onClick?: () => void;
};
type Props = WithChildren<PropTypes>;

const Tooltip = ({
  children,
  dataFor,
  type = 'dark',
  effect = 'solid',
  place = 'top',
  content,
  style = {},
  onClick,
}: Props) => {
  return (
    <>
      <a
        data-tip
        data-for={dataFor}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        onClick={onClick}
      >
        {children}
      </a>
      <ReactTooltip id={dataFor} type={type} effect={effect} place={place}>
        <span>{content}</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
