'use client'

import Image from 'next/image'

type CardProps = {
  title?: string
  subtitle?: string
  image?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({
  title,
  subtitle,
  image,
  children,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      className={`text-left rounded-md shadow-sm bg-light border border-main ${className}`}
    >
      {title && (
        <div
          className="flex justify-between items-center gap-2 px-2"
          onClick={onClick}
        >
          {image && (
            <Image
              src={image}
              alt={title || 'image'}
              width={50}
              height={50}
              className=""
            />
          )}
          <div className="">
            <h2>{title}</h2>
            <h5>{subtitle || ''}</h5>
          </div>
        </div>
      )}
      <div className="p-2">{children}</div>
    </div>
  )
}
