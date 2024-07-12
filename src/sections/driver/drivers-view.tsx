'use client';

import Image from 'next/image';

import DriversTable from './table/drivers-table';
import { Driver } from '@/utils/types/types';

type DriversViewProps = {
  drivers: Driver[];
};

export default function DriversView({ drivers }: DriversViewProps) {
  return <DriversTable data={drivers} />;
}
