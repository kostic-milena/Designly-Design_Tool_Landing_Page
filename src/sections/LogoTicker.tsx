import Image from "next/image";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section
      aria-label="Trusted by teams"
      className="relative bg-neutral-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-white/50">
          Trusted by fast-moving teams
        </p>

        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-logo-ticker gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-[140px] items-center justify-center"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
