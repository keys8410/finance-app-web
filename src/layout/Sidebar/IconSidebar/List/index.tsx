import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconSidebar from '..';
import { TituloActions } from '../../../../store/modules/titulo/actions/handle';
import navigation from '../../navigation';
import { ContainerListIconSidebar } from './styles';

type Props = {
  onClose?: () => void;
};
const ListIconSidebar = ({ onClose }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const changeTitulo = useCallback(
    (titulo: string) => {
      dispatch(TituloActions.changeTitle({ titulo }));
    },
    [dispatch]
  );

  return (
    <div>
      {navigation.map((nav, index) => (
        <ContainerListIconSidebar
          key={`icon-to-${nav.to}-${index}`}
          onClick={() => {
            if (onClose) {
              onClose();
            }

            history.push(nav.to);
            changeTitulo(nav.name);
          }}
        >
          <IconSidebar
            icon={nav.icon}
            title={nav.name}
            active={history.location.pathname === nav.to}
          />
        </ContainerListIconSidebar>
      ))}
    </div>
  );
};

export default ListIconSidebar;
