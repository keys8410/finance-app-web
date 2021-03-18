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
  bgColor?: string;
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
  bgColor,
  onClick,
}: Props) => {
  return (
    <>
      <a
        data-tip
        data-for={dataFor}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        onClick={onClick}
      >
        {children}
      </a>
      <ReactTooltip
        id={dataFor}
        type={type}
        effect={effect}
        place={place}
        backgroundColor={bgColor}
      >
        <span>{content}</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
