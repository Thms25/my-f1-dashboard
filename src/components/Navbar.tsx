'use client'

import { useState } from 'react'

import { searchIcon } from '../../public/svgdata'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Navbar() {
  const years = ['2020', '2021', '2022', '2023', '2024', '2025']
  const [year, setYear] = useState(years[years.length - 1])
  return (
    <nav className="w-full flex justify-between items-center px-4 py-2">
      <Button variant="none">{searchIcon}</Button>
      <Select value={year} onValueChange={(value: string) => setYear(value)}>
        <SelectTrigger className="w-[80px] text-sky-800 border-0 outline-none">
          <SelectValue defaultValue={year} className="text-sky-800" />
        </SelectTrigger>
        <SelectContent>
          {years.map(year => (
            <SelectItem key={year} value={year} className="text-sky-700">
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </nav>
  )
}
