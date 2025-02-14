import Container from '@/components/Container'
import { Card, CardTitle } from '@/components/ui/card'

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <Container>
      <Card className="p-8">
        <CardTitle>Team page with id : {id}</CardTitle>
      </Card>
    </Container>
  )
}
