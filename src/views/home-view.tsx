// 'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function HomeView() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
          <CardDescription>Pitstat app</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </section>
  )
}
