import { format } from 'date-fns';
import { IHeatMapLancamentos } from '../../../../@types/lancamento';
import { formatNumberToValue } from '../../../../utils/stringUtils';
import { Modalbody } from '../styles';
import { CardHeat, UlHeat, LiHeat, TitleHeat } from './styles';

type Props = {
  heat: IHeatMapLancamentos;
};

const HeatMapItems = ({ heat }: Props) => {
  return (
    <Modalbody heatMap>
      <TitleHeat>
        Você cadastrou {heat.count} lançamentos <br /> no dia{' '}
        <span>{format(new Date(heat.date), 'dd/MM/yyy')}</span>
      </TitleHeat>
      <br />

      <CardHeat>
        <UlHeat>
          {heat.lancamentos.map((x, index) => (
            <LiHeat key={x.id}>
              0{index + 1}: {x.categoria} - {formatNumberToValue(x.valor)}
            </LiHeat>
          ))}
        </UlHeat>
      </CardHeat>
    </Modalbody>
  );
};

export default HeatMapItems;
