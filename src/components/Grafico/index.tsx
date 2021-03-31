import { ResponsivePie } from '@nivo/pie';
import { CategoriaStatsType } from '../../@types/categoria';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import CategoriasGrafico from './CategoriasGrafico';

const styles = {
  root: {
    position: 'relative',

    width: 350,
    height: 350,
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: '#333',
    textAlign: 'center',
    pointerEvents: 'none',

    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  totalLabel: {
    fontSize: 24,
  },
};

type Props = {
  categorias: CategoriaStatsType[];
  loading: boolean;
};

export const Grafico = ({ categorias, loading }: Props) => {
  return (
    <>
      {loading && categorias.length !== 0 ? (
        <p>Carregando...</p>
      ) : categorias ? (
        <>
          <DirectionalContainer align="center" justify="center">
            <div style={styles.root as {}}>
              <ResponsivePie
                margin={{ top: 20, bottom: 20 }}
                data={categorias}
                colors={(categorias && categorias?.map((x) => x.color)) ?? []}
                innerRadius={0.7}
                sortByValue
                enableRadialLabels={false}
                sliceLabel="none"
                isInteractive={false}
                startAngle={0}
                endAngle={360}
              />
              <div style={styles.overlay as {}}>
                <span>100%</span>
              </div>
            </div>
          </DirectionalContainer>

          <CategoriasGrafico categorias={categorias} />
        </>
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};
