import { useCallback } from 'react';
import { Animated } from 'react-animated-css';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { handleKeyboardEventIfScrollExists } from '../../utils/keyboardEventUtils';
import { ModalContainer, ModalBody, CloseModal, ModalHeader } from './styles';

const Modal = () => {
  const dispatch = useDispatch();

  const { opened, content, enabledToClose, title } = useTypedSelector(
    (states) => states.modal.handle
  );

  const closeModal = useCallback(() => {
    if (enabledToClose) {
      dispatch(ModalActions.close());
    }
  }, [dispatch, enabledToClose]);

  handleKeyboardEventIfScrollExists(() => closeModal(), opened);

  if (!opened) return null;
  else
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationOutDuration={350}
        animationInDuration={350}
        isVisible={opened}
      >
        <ModalContainer>
          <ModalBody>
            <ModalHeader>
              <p>{title}</p>

              {enabledToClose && (
                <CloseModal onClick={() => dispatch(ModalActions.close())} />
              )}
            </ModalHeader>

            <div
              style={{
                padding: '1rem 0 0.5rem 0.8rem',
              }}
            >
              {content}
            </div>
          </ModalBody>
        </ModalContainer>
      </Animated>
    );
};

export default Modal;
