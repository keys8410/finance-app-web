import { useMediaQuery } from 'atomic-layout';
import ReactShadowScroll, {
  ReactShadowScrollComponentProps,
} from 'react-shadow-scroll';
import { WithChildren } from '../../../@types/withChildren';

type PropTypes = ReactShadowScrollComponentProps & {
  height?: number;
  width?: number;
  nonUseMobile?: boolean;
};

type Props = WithChildren<PropTypes>;

/**
 *
 * @param height - height size receives a number and takes rem
 * @param width - width size receives a number and takes %
 */

const CustomScrollbar = ({
  height,
  width,
  children,
  styleSubcontainer,
  scrollColor,
  scrollWidth,
  isShadow,
  shadow,
  scrollColorHover,
  nonUseMobile,
  ...props
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {nonUseMobile ? (
        <ReactShadowScroll
          scrollColor={scrollColor ?? 'rgba(1, 1, 1, 0.1)'}
          isShadow={false}
          {...props}
        >
          <div
            style={{
              width: width ? `${width}%` : '100%',
              height: 'auto',
              maxHeight: `${height}rem`,
              transition: 'max-height 0.45s ease-in-out',
            }}
          >
            {children}
          </div>
        </ReactShadowScroll>
      ) : (
        <>
          {isMobile ? (
            <ReactShadowScroll
              scrollColor={scrollColor ?? 'rgba(1, 1, 1, 0.1)'}
              isShadow={false}
              {...props}
            >
              {children}
            </ReactShadowScroll>
          ) : (
            <ReactShadowScroll
              scrollColor={scrollColor ?? 'rgba(1, 1, 1, 0.1)'}
              isShadow={false}
              {...props}
            >
              <div
                style={{
                  width: width ? `${width}%` : '100%',
                  height: 'auto',
                  maxHeight: `${height}rem`,
                  transition: 'max-height 0.45s ease-in-out',
                }}
              >
                {children}
              </div>
            </ReactShadowScroll>
          )}
        </>
      )}
    </>
  );
};

export default CustomScrollbar;
