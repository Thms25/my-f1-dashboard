import Card from '../layout/Card'
import Avatar from '../layout/Avatar'

type TableProps = {
  title: string
  rows: any[]
}

export default function Table({ title, rows }: TableProps) {
  return (
    <Card className="">
      <h1 className="text-xl mx-auto p-2">{title}</h1>
      <div className="flex flex-col gap-1 max-h-[480px] overflow-scroll">
        {rows?.map((row: any, index: number) => (
          <div key={index} className="flex justify-between gap-2">
            {Object.keys(row).map((field: any) => (
              <div key={row[field]}>
                {field === 'image' ? (
                  <Avatar
                    src={row[field] || ''}
                    alt={row.driver || 'driver image'}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <p key={field}>{row[field]}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}
