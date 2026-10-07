import Image from "next/image";
import { business } from "@/lib/content";

const links = [
  ["Offerings", "#offerings"],
  ["Gatherings", "#gatherings"],
  ["Gallery", "#gallery"],
  ["Reels", "#reels"],
  ["Book", "#book"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="bar">
        <a className="brand" href="#top">
          <Image
            src="/brand/logo.jpg"
            alt="Gloria Catering logo"
            width={320}
            height={320}
            priority
          />
          <span>
            <span className="brand-name">{business.name}</span>
            <span className="brand-place">{business.area}</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="inquire" href="#book">
          Inquire
        </a>
      </div>
      <nav className="nav-row" aria-label="Sections">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
