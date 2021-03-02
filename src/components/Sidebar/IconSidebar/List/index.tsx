import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconSidebar from '..';
import { TituloActions } from '../../../../store/modules/titulo/actions/handle';
import navigation from '../../navigation';
import { ContainerListIconSidebar } from './styles';

const ListIconSidebar = () => {
  const history = useHistory();
  const [actuallyUrl, setActuallyUrl] = useState(history.location.pathname);
  const dispatch = useDispatch();

  const setActiveUrl = (to: string) => {
    history.push(`${to}`);

    setActuallyUrl(to);
  };

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
            setActiveUrl(nav.to);
            changeTitulo(nav.name);
          }}
        >
          <IconSidebar icon={nav.icon} active={actuallyUrl === nav.to} />
        </ContainerListIconSidebar>
      ))}
    </div>
  );
};

export default ListIconSidebar;
