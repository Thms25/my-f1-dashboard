'use client'

import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()
  return (
    <Container className="">
      <Card className="mx-auto w-4/5 md:w-2/3 xl:w-1/3 h-1/2 p-6 my-16 text-center">
        <CardTitle className="font-semibold text-zinc-600">
          Something went wrong!
        </CardTitle>
        <CardContent className="mt-8 text-center">
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="mb-4 text-zinc-600"
          >
            Back Home
          </Button>
          <p className="text-sm text-zinc-500">
            If the problem persists, please contact{' '}
            <a
              href="mailto:tho.allen.martinho@hotmail.com"
              className="underline"
            >
              support
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </Container>
  )
}
