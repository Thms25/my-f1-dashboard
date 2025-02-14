export default async function DriverPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div>
      <h1>driver page with id : {id}</h1>
    </div>
  )
}
