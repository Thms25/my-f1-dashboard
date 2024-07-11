'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import HomeStandings from '../home/home-standings';

type DriversViewProps = {
  drivers: any[];
};

export default function DriversView({ drivers }: DriversViewProps) {
  const router = useRouter();
  return (
    <HomeStandings
      title="2024 Drivers"
      tableData={drivers}
      tableLabels={[
        { id: '' },
        { id: 'id', label: 'Driver Number' },
        { id: 'category', label: 'Name' },
        { id: 'price', label: 'Team' },
        { id: 'status', label: 'Points' },
      ]}
    />
  );
}
