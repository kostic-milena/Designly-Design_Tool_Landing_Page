const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section id="introduction"
      className="relative bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Small label */}
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
            One workspace. One flow.
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Designly unifies your team on a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              single real-time canvas
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Brainstorm ideas, create pixel-perfect mockups, and hand off designs
            to developers — all without switching tools or losing momentum.
          </p>
        </div>
      </div>

      {/* Subtle separator glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>;
}
