import Image from "next/image";

import featureImage from "@/assets/images/feature-main.png";

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-neutral-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="hidden lg:block sticky top-32 self-start">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Everything your team needs to move faster
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Design, collaborate, and ship in one unified workspace built for
              modern product teams.
            </p>

            <div className="mt-12 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
              <Image
                src={featureImage}
                alt="Feature preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-14 mt-11">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Real-time collaboration
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Work together on the same canvas with live cursors, comments, and
                instant updates, so everyone stays aligned and changes happen
                the moment they’re made.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Pixel-perfect design
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Create high-fidelity mockups with precise control over layout,
                spacing, and typography, ensuring designs look exactly as
                intended across every screen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Seamless handoff
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Generate specs, assets, and code-ready details directly from
                your designs, making the transition from design to development
                faster and frictionless.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Version history
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Track changes over time, restore previous states, and experiment
                freely, knowing you can always roll back without losing
                progress.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Developer-friendly
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Inspect components, copy styles, and export production-ready
                assets, giving developers everything they need without
                additional back-and-forth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Cloud-based workflow
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Access your work from anywhere with fast, secure, real-time sync
                that keeps your entire team connected and up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
