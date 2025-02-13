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

// Menu items.
const sidebarItems = [
  {
    title: 'Home',
    url: '#',
    icon: homeIcon,
  },
  {
    title: 'Drivers',
    url: '#',
    icon: helmetIcon,
  },
  {
    title: 'Teams',
    url: '#',
    icon: peopleIcon,
  },
  {
    title: 'Races',
    url: '#',
    icon: raceFlagIcon,
  },
]

export function AppSidebar() {
  const state = useSidebar()
  console.log(state)
  return (
    <Sidebar collapsible="icon">
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
          <SidebarGroupLabel>Past Seasons</SidebarGroupLabel>
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
      </SidebarContent>
      <SidebarFooter className="p-4 text-sky-800">
        <p className="text-sm">@Thms25</p>
      </SidebarFooter>
    </Sidebar>
  )
}
