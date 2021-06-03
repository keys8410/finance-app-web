import { format } from 'date-fns';
import { IHeatMapLancamentos } from '../../../../@types/lancamento';
import { useFetch } from '../../../../hooks/useFetch';
import { Forms, GridTemplate } from '../../../../styles/global';
import { CardContentHeatMap } from './styles';
import HeatMapItems from '../../../Modal/Contents/HeatMap';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { ModalActions } from '../../../../store/modules/modal/actions/handle';
import { useAuth } from '../../../../contexts/authProvider';
import AnosSelect from '../../../Forms/Select/AnosSelect';
import HeatMap from '..';

const HeatMapLancamentos = () => {
  const [dataAno, setDataAno] = useState(format(new Date(), 'yyyy'));

  const dispatch = useDispatch();
  const { user } = useAuth();

  const openModal = useCallback(
    (heat: IHeatMapLancamentos) => {
      dispatch(
        ModalActions.setContent({
          opened: true,
          enabledToClose: true,
          title: `Parabéns, ${user?.apelido ?? user?.nome}!`,
          content: <HeatMapItems heat={heat} />,
        })
      );
    },
    [dispatch]
  );

  const { response, isLoading } = useFetch<IHeatMapLancamentos[]>(
    `/usuario/stats/ano?ano=${dataAno}`
  );

  return (
    <CardContentHeatMap>
      <GridTemplate customColumns="1fr auto" gap="1rem">
        {!isLoading && response ? (
          <HeatMap
            dateYear={+dataAno}
            values={response}
            showWeekdayLabels
            gutterSize={2}
            tooltipDataAttrs={(heat: IHeatMapLancamentos) => {
              return {
                'data-tip': heat.lancamentos ? `Quantidade: ${heat.count}` : '',
              };
            }}
            classForValue={(heat: IHeatMapLancamentos) => {
              if (!heat) {
                return 'color-empty';
              }
              if (heat.count >= 10) {
                return `color-scale-10`;
              }

              return `color-scale-${heat.count}`;
            }}
            onClick={(heat: IHeatMapLancamentos) =>
              heat ? openModal(heat) : false
            }
          />
        ) : (
          <HeatMap
            dateYear={+dataAno}
            values={[]}
            showWeekdayLabels
            gutterSize={2}
            onClick={(heat: IHeatMapLancamentos) =>
              heat ? openModal(heat) : false
            }
          />
        )}

        <Forms onSubmit={() => false} initialData={{ dataAno }}>
          <AnosSelect
            name="dataAno"
            onChange={(x) => {
              if (x.value) {
                setDataAno(x.value);
              }
            }}
          />
        </Forms>
      </GridTemplate>
    </CardContentHeatMap>
  );
};

export default HeatMapLancamentos;
