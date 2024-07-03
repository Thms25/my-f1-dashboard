'use client'

import { useRouter } from 'next/navigation'

// Asset
import { f1Icon, searchIcon } from '../../../public/assets/svgs/svg_data'

// ----------------------------------------------------------

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="bg-light w-full sticky top-0">
      <div className="flex justify-between items-center mx-4 shadow-sm">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.push('/')}
        >
          <p className="font-fancy">THMS | F1 </p>
          <div className="w-12 h-12 text-main opacity-80">{f1Icon}</div>
        </div>

        <div className="flex justify-center items-center text-xs">
          <div className="w-5 h-5 mx-2 text-main text-opacity-70">
            {searchIcon}
          </div>
          <input
            type="text"
            placeholder="Find any F1 data..."
            className="bg-light text-main text-xs focus:outline-none p-2 w-full"
          />
        </div>

        <div className=" w-12 bg-red-700"></div>
      </div>
    </nav>
  )
}
