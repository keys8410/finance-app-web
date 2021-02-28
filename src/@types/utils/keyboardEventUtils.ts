import { useMediaQuery } from 'atomic-layout';
import { useEffect, useCallback } from 'react';

export const handleKeyboardEventIfScrollExists = (
  handleClose: () => void | any,
  visible: boolean
) => {
  const isMobile = useMediaQuery({ maxWidth: 1680 });
  const handleKeyboardAction = useCallback((e) => {
    if (e.keyCode == 27) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardAction);

    return () => {
      window.removeEventListener('keydown', handleKeyboardAction);
    };
  }, []);

  useEffect(() => {
    isMobile && visible
      ? document.body.setAttribute(
          'style',
          'overflow-y: scroll; position: fixed; width: 100%;'
        )
      : document.body.removeAttribute('style');
  }, [visible]);
};

export const handleKeyboardEvent = (
  handleClose: () => void | any,
  visible: boolean
) => {
  const isMobile = useMediaQuery({ maxWidth: 1680 });
  const handleKeyboardAction = useCallback((e) => {
    if (e.keyCode == 27) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardAction);

    return () => {
      window.removeEventListener('keydown', handleKeyboardAction);
    };
  }, []);

  useEffect(() => {
    isMobile && visible
      ? document.body.setAttribute(
          'style',
          'overflow-y: scroll; position: fixed; width: 100%;'
        )
      : document.body.removeAttribute('style');
  }, [visible]);
};
