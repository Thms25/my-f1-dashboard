import Image from 'next/image'

type CardProps = {
  title: string
  subtitle: string
  image: string
  children: React.ReactNode
  className?: string
}

export default function Card({
  title,
  subtitle,
  image,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={`rounded-sm shadow-sm bg-light border border-main ${className}`}
    >
      <div className="flex justify-between items-center p-2">
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="">
          <h2>{title}</h2>
          <h5>{subtitle}</h5>
        </div>
      </div>
      <div className="p-2">{children}</div>
    </div>
  )
}
