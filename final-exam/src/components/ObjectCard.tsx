import type { ObjectItem } from '../types'

interface ObjectCardProps {
  item: ObjectItem
}

function ObjectCard({ item }: ObjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <img src={`${item.image}`} alt={item.title} className="h-48 w-full object-cover" />
      <div className="p-4 text-center">
        <h3 className="mb-2 font-bold uppercase text-blue-600">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}

export default ObjectCard
