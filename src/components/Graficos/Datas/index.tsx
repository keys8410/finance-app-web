import { DataStatsType } from '../../../@types/categoria';
import { useThemeToggle } from '../../../contexts/ThemeToggleProvider';
import empty from '../../../assets/svg/sem_dado.svg';
import { format } from 'date-fns';
import ReactApexChart from 'react-apexcharts';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';

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
        <ReactApexChart
          options={{
            colors: [gastou ? '#FF698A' : '#FFDD6A'],
            chart: {
              width: '100%',
              height: 350,
              type: 'bar',
              toolbar: {
                show: true,
                tools: {
                  download: false,
                },
              },
            },
            plotOptions: {
              bar: {
                columnWidth: '75%',
                distributed: false,
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              },
            },
            dataLabels: {
              enabled: true,
              formatter: (total: any) => formatter.format(total ?? 0),
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: [scheme == 'light' ? 'black' : 'white'],
              },
            },
            yaxis: {
              labels: {
                formatter: (total: any) => formatter.format(total ?? 0),
                style: { colors: scheme == 'light' ? 'black' : 'white' },
              },
            },
            xaxis: {
              categories: elements.map((x) =>
                format(new Date(x.periodo), 'dd/MM')
              ),
              position: 'bottom',
              labels: {
                style: { colors: scheme == 'light' ? 'black' : 'white' },
              },
            },
            noData: { text: 'Sem dado.' },
            tooltip: {
              theme: scheme == 'light' ? 'light' : 'dark',
            },
          }}
          series={[
            {
              name: 'Valor',
              colors: scheme == 'light' ? 'black' : 'white',
              data: elements.map((x) => x.total),
            },
          ]}
          type="bar"
          height={350}
        />
      ) : (
        <DirectionalContainer height>
          <img src={empty} alt="Nenhum lançamento cadastrado." />
          <span>Nenhum lançamento cadastrado.</span>
        </DirectionalContainer>
      )}
    </>
  );
};

export default DataGrafico;
