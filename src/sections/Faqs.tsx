"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes. Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real time.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={faq.question}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full text-left"
              >
                <div className="flex items-center justify-between p-6 sm:p-8">
                  <h3 className="text-base font-medium text-white">
                    {faq.question}
                  </h3>
                  <span
                    className={`ml-4 text-white/60 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 sm:pb-8"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-6 sm:px-8">
                    <p className="text-sm leading-relaxed text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
