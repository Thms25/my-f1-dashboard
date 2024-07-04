export default async function RacePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Race page</h1>
      <h4>Race id: {params.id}</h4>
    </div>
  )
}
