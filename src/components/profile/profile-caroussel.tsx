'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AspectRatio } from '../ui/aspect-ratio'

export default function ProfileCaroussel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % images.length
      api.scrollTo(nextIndex)
    }, 10000)

    return () => clearInterval(interval)
  }, [api, images.length])

  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <Carousel setApi={setApi} className="w-full max-w-sm">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={img}
                  alt="profile image"
                  width={200}
                  height={200}
                  layout="responsive"
                  className="rounded-lg shadow-md object-contain object-center"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} of {images.length}
      </div>
    </div>
  )
}
