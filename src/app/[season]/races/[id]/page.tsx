export default async function RacePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
      <h1>Team page with id : {id}</h1>
    </div>
  )
}
