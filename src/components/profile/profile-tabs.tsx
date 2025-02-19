'use client'

import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { motion } from 'framer-motion'

type tabItem = {
  name: string
  link: string
}

export default function ProfileTabs({ tabs }: { tabs: tabItem[] }) {
  const router = useRouter()
  const [selected, setSelected] = useState(tabs[0])

  function handleTabChange(link: string) {
    console.log('changing tab')
    // router.push(link)
  }

  return (
    <div className="flex items-center flex-wrap gap-2 my-2">
      {tabs.map(tab => (
        <button
          key={tab.name}
          onClick={() => setSelected(tab)}
          className={`${
            selected === tab
              ? 'text-zinc-700'
              : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700'
          } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
        >
          <span className="relative z-10">{tab.name}</span>
          {selected === tab && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: 'spring', duration: 0.5 }}
              className="absolute inset-0 z-0 bg-zinc-200 rounded-md"
            ></motion.span>
          )}
        </button>
      ))}
    </div>
  )
}
