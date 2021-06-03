import React, { useCallback } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconSidebar from '..';
import { useAuth } from '../../../../contexts/authProvider';
import { TituloActions } from '../../../../store/modules/titulo/actions/handle';
import navigation from '../../router';
import { ContainerListIconSidebar } from './styles';

type Props = {
  onClose?: () => void;
};
const ListIconSidebar = ({ onClose }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sair } = useAuth();

  const changeTitulo = useCallback(
    (titulo: string) => {
      dispatch(TituloActions.changeTitle({ titulo }));
    },
    [dispatch]
  );

  return (
    <div>
      {navigation.map((nav) => (
        <ContainerListIconSidebar
          key={`icon-to-${nav.to}`}
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

      <ContainerListIconSidebar onClick={sair}>
        <IconSidebar icon={<HiOutlineLogout />} title="Sair" active={false} />
      </ContainerListIconSidebar>
    </div>
  );
};

export default ListIconSidebar;
