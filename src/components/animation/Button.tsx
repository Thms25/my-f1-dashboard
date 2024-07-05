'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  onCLick: () => void
}

export function Button({ children, onCLick }: ButtonProps) {
  return (
    <motion.div
      onClick={onCLick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-main text-light p-2 rounded-md shadow-md cursor-pointer"
    >
      {children}
    </motion.div>
  )
}
