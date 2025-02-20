import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { maxLength } from '@/utilis/text-utils'
import { useState } from 'react'

type ProfileInfoProps = {
  infos: any
  title: string
  subtitle?: string
  bio?: string
}

export default function ProfileInfo({
  infos,
  title,
  subtitle,
  bio = '',
}: ProfileInfoProps) {
  const [driverBio, setDriverBio] = useState(maxLength(bio, 200))
  const [bioExpanded, setBioExpanded] = useState(false)
  return (
    <Card className="flex flex-col gap-4 p-2 border-0 shadow-none w-full">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
          <CardContent className="text-xs text-zinc-500 p-0">
            {driverBio}
            <span
              onClick={() => {
                setBioExpanded(!bioExpanded)
                setDriverBio(bioExpanded ? maxLength(bio, 200) : bio)
              }}
              className="ml-4 text-[9px] text-zinc-400 hover:text-zinc-700 cursor-pointer transition duration-200"
            >
              {bioExpanded ? 'Show less' : 'Show more'}
            </span>
          </CardContent>
        </CardHeader>
      </Card>
      {infos.map((info: any) => (
        <Card key={info.title}>
          <CardContent>
            <h3 className="font-semibold text-md my-2">{info.title}</h3>
            {info.content.map((item: any) => (
              <div className="flex gap-2" key={item.key}>
                <h6 className="">{item.key}: </h6>
                <p className="">{item.val}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </Card>
  )
}
