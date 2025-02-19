'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import {
  helmetIcon,
  homeIcon,
  peopleIcon,
  raceFlagIcon,
} from '../../public/svgdata'
import { paths } from '@/utilis/paths'

// Menu items.
const sidebarItems = [
  {
    title: 'Home',
    url: paths.home,
    icon: homeIcon,
  },
  {
    title: 'Drivers',
    url: paths.drivers.root(),
    icon: helmetIcon,
  },
  {
    title: 'Teams',
    url: paths.teams.root(),
    icon: peopleIcon,
  },
  {
    title: 'Races',
    url: paths.races.root(),
    icon: raceFlagIcon,
  },
]

const analyticsTools = [
  {
    title: 'Driver Stats',
    url: paths.analytics.drivers(),
    icon: helmetIcon,
  },
  {
    title: 'Team Overview',
    url: paths.analytics.teams(),
    icon: peopleIcon,
  },
  {
    title: 'Race Analysis',
    url: paths.analytics.races(),
    icon: raceFlagIcon,
  },
]

export function AppSidebar() {
  const state = useSidebar()
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="ml-2 py-4 text-sky-800">
        <Link
          className={`flex items-center gap-2 ${
            state.open ? '' : 'justify-center'
          }`}
          href={'/'}
        >
          <Image
            priority
            src="/images/logo.png"
            alt="Pitstat logo"
            width={48}
            height={48}
          />
          {state.open && (
            <h1 className="text-xl font-bold hover:text-sky-900">PITSTAT</h1>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Current Season</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <div className="text-sky-800">{item.icon}</div>
                      <span className="text-sky-800">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsTools.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <div className="text-sky-800">{item.icon}</div>
                      <span className="text-sky-800">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-sky-800">
        <p className="text-sm">@Thms25</p>
      </SidebarFooter>
    </Sidebar>
  )
}
