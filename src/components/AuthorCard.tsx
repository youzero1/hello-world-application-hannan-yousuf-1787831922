type AuthorCardProps = {
  name: string;
  role: string;
  initials: string;
};

export function AuthorCard({ name, role, initials }: AuthorCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-left">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-fuchsia-400 text-sm font-semibold text-slate-950">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-white">{name}</p>
        <p className="truncate text-xs text-slate-400">{role}</p>
      </div>
    </div>
  );
}
