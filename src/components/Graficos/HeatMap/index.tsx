import ReactCalendarHeatmap, { Props } from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

interface PropsHeatMap extends Props {
  dateYear: number;
  values: any[];
  onClick: (heat: any) => void;
}
const HeatMap = ({ dateYear, values, onClick, ...rest }: PropsHeatMap) => {
  return (
    <div>
      <ReactCalendarHeatmap
        startDate={new Date(dateYear, 0, 0)}
        endDate={new Date(dateYear, 12, 0)}
        values={values}
        tooltipDataAttrs={rest.tooltipDataAttrs ?? undefined}
        monthLabels={[
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ]}
        weekdayLabels={['Dom', 'Seg', 'Ter', 'Qui', 'Qua', 'Sex', 'Sáb']}
        onClick={onClick}
        {...rest}
      />

      <ReactTooltip />
    </div>
  );
};

export default HeatMap;
