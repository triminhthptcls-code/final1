import type { SubjectItem } from '../types'

interface SubjectCardProps {
  item: SubjectItem
}

function SubjectCard({ item }: SubjectCardProps) {
  return (
    <img
      src={`/${item.image}`}
      alt={item.subject}
      title={item.subject}
      className="h-28 w-28 rounded-full object-cover shadow"
    />
  )
}

export default SubjectCard