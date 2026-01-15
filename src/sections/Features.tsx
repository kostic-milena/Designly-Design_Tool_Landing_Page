import Image from "next/image";

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-neutral-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything your team needs to move faster
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Design, collaborate, and ship in one unified workspace built for
            modern product teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Real-time collaboration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Work together on the same canvas with live cursors, comments, and
              instant updates.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Pixel-perfect design
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Create high-fidelity mockups with precise layout, spacing, and
              typography controls.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Seamless handoff
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Generate specs, assets, and code-ready details without switching
              tools.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Version history
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Track changes, restore previous states, and experiment without
              fear.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Developer-friendly
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Inspect components, copy styles, and export assets ready for
              production.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Cloud-based workflow
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Access your work anywhere with fast, secure, real-time sync.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
