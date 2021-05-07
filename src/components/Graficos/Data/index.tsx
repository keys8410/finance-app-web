import { VictoryBar } from 'victory';
import { DataStatsType } from '../../../@types/categoria';
import { useThemeToggle } from '../../../contexts/ThemeToggleProvider';

type Props = {
  isLoading: boolean;
  elements: DataStatsType[];
  gastou: boolean;
};

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const DataGrafico = ({ isLoading, elements, gastou }: Props) => {
  const { scheme } = useThemeToggle();

  return (
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ) : elements ? (
        <VictoryBar
          data={elements.map((x) => ({
            x: x.periodo,
            y: x.total,
          }))}
          labels={({ datum }) => formatter.format(datum.y ?? 0)}
          style={{
            labels: {
              fill: scheme === 'dark' ? 'white' : 'black',
              fontSize: 14,
              fontWeight: 'bold',
            },
            data: { fill: gastou ? '#FF698A' : '#FFDD6A' },
          }}
          cornerRadius={15}
          barWidth={30}
          padding={35}
          animate={{
            duration: 500,
            onLoad: { duration: 300 },
          }}
        />
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};

export default DataGrafico;
