'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProfileTabs({
  tabs,
  onTabChange,
  currentTab,
}: {
  tabs: string[]
  onTabChange: (value: string) => void
  currentTab: string
}) {
  const [selected, setSelected] = useState(currentTab)
  useEffect(() => {
    setSelected(currentTab)
  }, [currentTab])

  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="flex items-center flex-wrap gap-2 my-4">
        {tabs.map(tab => (
          <div className="flex items-center" key={tab}>
            <p
              onClick={() => {
                setSelected(tab)
                onTabChange(tab)
              }}
              className={`${
                selected === tab
                  ? 'text-zinc-700 border-b-2 border-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-700'
              } text-sm transition-colors mx-2.5 py-0.5 relative cursor-pointer duration-150`}
            >
              <span className="relative z-10">{tab}</span>
              {selected === tab && (
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: 'ease', duration: 0.5 }}
                  className="absolute inset-0 z-0 border-b-0.5 border-zinc-700"
                ></motion.span>
              )}
            </p>
            {tab !== tabs[tabs.length - 1] && (
              <span className="text-zinc-500">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
