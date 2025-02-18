import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type BreadCrumbItem = {
  name: string
  href?: string
}

export default function BreadCrumb({ items }: { items: BreadCrumbItem[] }) {
  return (
    <Breadcrumb className="mb-4 font-semibold">
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbLink
                href={item.href || '#'}
                className={`text-zinc-500${
                  item.href
                    ? 'cursor-pointer hover:text-zinc-800'
                    : 'cursor-text hover:text-zinc-500'
                }`}
              >
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator aria-label="breadcrumb separator" />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
