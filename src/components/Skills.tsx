import type { SkillGroup } from '@/data/cv'

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.label} className="avoid-break">
          <dt className="text-[12px] font-semibold tracking-[0.08em] text-ink-3 uppercase">
            {group.label}
          </dt>
          <dd>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-rule bg-surface px-2 py-1 text-[12.5px] text-ink-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
