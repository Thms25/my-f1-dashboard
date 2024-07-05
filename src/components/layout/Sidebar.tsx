'use client'

// Assets
import {
  teamIcon,
  driverIcon,
  homeIcon,
} from '../../../public/assets/svgs/svg_data'
import { usePathname, useRouter } from 'next/navigation'

// --------------------------------------------

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: homeIcon,
    },
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

  return (
    <nav className="bg-light h-full fixed top-50">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index + 1}
            onClick={() => router.push(item.link)}
            className={`p-4  w-full flex items-center gap-2 cursor-pointer ${
              item.link === pathname ? ' bg-main text-light' : ''
            }`}
          >
            <div className="w-6 h-6">{item.icon}</div>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}
