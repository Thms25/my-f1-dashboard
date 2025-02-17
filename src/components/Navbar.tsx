'use client'

import { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { redirect, useParams, usePathname } from 'next/navigation'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { season } = useParams() as { season: string }
  const path = usePathname()
  const years = ['2020', '2021', '2022', '2023', '2024', '2025']
  const [year, setYear] = useState(season || years[years.length - 1])

  useEffect(() => {
    setYear(season)
  }, [season])

  function changeSeason(y: string) {
    const prev = year
    setYear(y)
    redirect(path.replace(prev, y))
  }
  return (
    <nav className="w-full flex justify-between items-center px-4 py-2">
      <Searchbar />
      <Select
        value={year}
        onValueChange={(value: string) => changeSeason(value)}
      >
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
