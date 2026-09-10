import type { Role } from '@/data/cv'

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="avoid-break relative pl-6 sm:pl-8">
      <span
        aria-hidden
        className="absolute top-[9px] left-0 size-2 rounded-full border-2 border-accent bg-paper sm:left-[2px]"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-[19px] leading-tight font-medium tracking-[-0.01em] text-ink">
          {role.title}
        </h3>
        <p className="tabular-nums text-[12.5px] whitespace-nowrap text-ink-3">
          {role.start && `${role.start} – `}
          {role.end}
        </p>
      </div>

      <p className="mt-0.5 text-[14px] font-medium text-accent">{role.company}</p>
      {role.context && <p className="mt-0.5 text-[13px] text-ink-3">{role.context}</p>}

      <ul className="mt-3 space-y-2">
        {role.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-2">
            <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-rule-strong" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Experience({ roles }: { roles: Role[] }) {
  return (
    <ol className="relative space-y-10">
      <span aria-hidden className="absolute top-2 bottom-2 left-[3px] w-px bg-rule sm:left-[5px]" />
      {roles.map((role) => (
        <RoleEntry key={`${role.company}-${role.title}`} role={role} />
      ))}
    </ol>
  )
}
