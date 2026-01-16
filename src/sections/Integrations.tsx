import Image from "next/image";

import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";

const integrations = [
  {
    name: "Figma",
    icon: figmaLogo,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionLogo,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackLogo,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeLogo,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerLogo,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubLogo,
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
                  src={integration.icon}
                  alt={integration.name}
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
