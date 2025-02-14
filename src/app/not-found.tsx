import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center space-y-4 p-16">
      <Card className="p-8 flex flex-col items-center space-y-4">
        <CardTitle>404 - Not Found</CardTitle>
        <CardDescription>Could not find requested resource</CardDescription>
        <CardContent>
          <Button>
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
