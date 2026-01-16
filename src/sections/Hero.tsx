import Button from "@/components/button";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute left-40 top-80 hidden lg:block">
        <Pointer name="Anna" color="red" />
      </div>
      <div className="absolute right-40 top-40 hidden lg:block">
        <Pointer name="Michael" />
      </div>

      <div className="container px-6">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 px-3 py-1 text-sm font-semibold text-neutral-950 sm:text-base">
            $10M seed round raised
          </div>
        </div>

        <h1 className="mt-6 text-center text-4xl font-medium sm:text-5xl lg:text-6xl">
          Design Without Limits.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-white/60 sm:mt-8 sm:text-lg lg:text-xl">
          Designly unifies your team on a single real-time canvas. Brainstorm
          ideas, create pixel-perfect mockups, and hand off designs to developers
          — all without switching tools or losing momentum.
        </p>

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/15 p-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none sm:py-2"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="w-full whitespace-nowrap sm:w-auto"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
