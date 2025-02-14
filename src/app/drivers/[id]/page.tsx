export default function DriverPage({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <div>
      <h1>driver page with id : {id}</h1>
    </div>
  )
}
