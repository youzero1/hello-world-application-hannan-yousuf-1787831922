import { createFileRoute } from '@tanstack/react-router';
import { Greeting } from '@/components/Greeting';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 px-8 py-12 shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-12 sm:py-14">
        <Greeting name="World" />
      </section>
    </main>
  );
}
