import SnapListCategorias from '../../components/Graficos/Categorias/SnapListCategorias';
import HeatMapLancamentos from '../../components/Graficos/HeatMap/HeatMapLancamentos';
import { CardBordered, CardBorderedContent } from '../../styles/global';
import { StatsTitle } from './styles';

const Stats = () => {
  return (
    <CardBordered>
      <CardBorderedContent>
        <StatsTitle>Porcentagem por categoria</StatsTitle>
        <SnapListCategorias />
      </CardBorderedContent>

      <CardBorderedContent>
        <StatsTitle>Heatmap anual</StatsTitle>
        <HeatMapLancamentos />
      </CardBorderedContent>
    </CardBordered>
  );
};

export default Stats;
