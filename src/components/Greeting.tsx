type GreetingProps = {
  name: string;
};

export function Greeting({ name }: GreetingProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400" />
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        Hello {name}
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400 sm:text-base">
        Welcome — everything is working perfectly.
      </p>
    </div>
  );
}
