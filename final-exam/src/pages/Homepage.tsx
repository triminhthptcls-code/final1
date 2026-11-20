import objects from '../data/objects.json'
import subjects from '../data/subjects.json'
import ObjectCard from '../components/ObjectCard'
import SubjectCard from '../components/SubjectCard'

function HomePage() {
  return (
    <div className="space-y-12">
      <img src="/image/banner.png" alt="Banner" className="mx-auto w-full max-w-4xl rounded" />

      <section>
        <h2 className="mb-6 text-center text-xl font-bold uppercase">
          Should who learn programing in FPT Aptech?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {objects.map((o) => (
            <ObjectCard key={o.id} item={o} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-xl font-bold uppercase">
          What is the course program?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {subjects.map((s) => (
            <SubjectCard key={s.id} item={s} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-600">
          {subjects[0].description}
        </p>
      </section>
    </div>
  )
}

export default HomePage