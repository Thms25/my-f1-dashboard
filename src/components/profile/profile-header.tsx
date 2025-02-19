import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card } from '../ui/card'

type ProfileHeaderTypeProps = {
  avatar?: string
  cover?: string
  avatarSize?: number
  title: string
  subtitle: string
}

export default function ProfileHeader({
  avatar,
  cover,
  avatarSize = 24,
  title,
  subtitle,
}: ProfileHeaderTypeProps) {
  return (
    <Card className="relative flex items-conter justify-center flex-col w-full h-[220px] bg-transparent overflow-hidden shadow-md">
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />

      <div className="z-10 flex gap-4 items-center">
        <Avatar className={`ml-8 w-${avatarSize} h-${avatarSize} shadow-sm `}>
          <AvatarImage src={avatar} alt="avatar-picture" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-white">
          <h1 className="text-xl font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <h4 className="text-lg text-white drop-shadow-sm">{subtitle}</h4>
        </div>
      </div>
    </Card>
  )
}
