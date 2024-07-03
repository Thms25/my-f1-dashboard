'use client'

// Hooks
import { useState } from 'react'

// Assets
import {
  teamIcon,
  driverIcon,
  f1Icon,
} from '../../../public/assets/svgs/svg_data'
import { usePathname, useRouter } from 'next/navigation'

// --------------------------------------------

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [selected, setSelected] = useState(0)
  const navItems = [
    {
      name: 'Drivers',
      link: '/drivers',
      icon: driverIcon,
    },
    {
      name: 'Teams',
      link: '/teams',
      icon: teamIcon,
    },
  ]

  const links = navItems.map(item => item.link)

  return (
    <nav className="bg-light w-16 h-full fixed top-50">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index + 1}
            onClick={() => (setSelected(index + 1), router.push(item.link))}
            className={`p-4  w-full flex justify-center items-center ${
              index + 1 === selected && links.includes(pathname)
                ? ' bg-main text-light'
                : ''
            }`}
          >
            <div className="w-6 h-6">{item.icon}</div>
          </li>
        ))}
      </ul>
    </nav>
  )
}
