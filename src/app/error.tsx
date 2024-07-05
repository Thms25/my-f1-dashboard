'use client'

import { Button } from '@/components/animation/Button'
import { useRouter } from 'next/navigation'

export default function error() {
  const router = useRouter()
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Button
        onCLick={() => {
          router.back()
        }}
      >
        Go Back
      </Button>
    </div>
  )
}
