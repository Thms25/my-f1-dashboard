'use client'

import Image from 'next/image'

type CardProps = {
  src?: string
  alt?: string
  className?: string
  width?: number
  height?: number
  onClick?: () => void
}

export default function Avatar({
  src,
  alt,
  className,
  width,
  height,
  onClick,
}: CardProps) {
  return (
    <Image
      src={src || '/assets/images/default_avatar.png'}
      alt={alt || 'avatar_image'}
      width={width || 40}
      height={height || 40}
      className={`rounded-md shadow-sm ${className}`}
    />
  )
}
