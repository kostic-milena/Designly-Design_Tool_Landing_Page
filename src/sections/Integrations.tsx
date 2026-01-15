import Image from "next/image";

const integrations = [
  {
    name: "Figma",
    icon: "figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: "framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: "github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative bg-neutral-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
            Integrations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Connect with the tools you already use
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Designly integrates seamlessly with your existing workflow so your
            team never loses momentum.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20"
            >
              <div className="mb-6 flex h-10 items-center">
                <Image
                  src={`/images/integrations/${integration.icon}`}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {integration.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
