import { Race } from '@/utils/types/types';
import RacesTable from './table/races-table';

type RacesViewProps = {
  races: Race[];
};

export default function RacesView({ races }: RacesViewProps) {
  return <RacesTable data={races} />;
}
