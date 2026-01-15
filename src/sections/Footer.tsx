const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Designly. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
