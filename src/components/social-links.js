import { socialLinks } from "./site-data";

function Icon({ type }) {
  if (type === "spotify") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path className="fill-current" d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21z" />
        <g transform="translate(0.7 0)">
          <path
            className="fill-[#4b5563]"
            d="M16.62 16.6a.75.75 0 0 1-1.03.25 8.92 8.92 0 0 0-9.16-.7.75.75 0 1 1-.66-1.35 10.42 10.42 0 0 1 10.7.82.75.75 0 0 1 .15.98zm1.35-2.45a.94.94 0 0 1-1.27.34 11.17 11.17 0 0 0-11.5-.88.94.94 0 0 1-.81-1.69 13.04 13.04 0 0 1 13.42.98c.45.24.61.8.36 1.25zm.12-2.62a.98.98 0 0 1-1.35.31 13.55 13.55 0 0 0-13.7-1 .98.98 0 0 1-.84-1.77 15.51 15.51 0 0 1 15.7 1.15c.47.27.63.87.35 1.32z"
          />
        </g>
      </svg>
    );
  }

  if (type === "apple") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 2.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zm0 5.4a4.8 4.8 0 0 0-4.8 4.8v1.2a4.8 4.8 0 1 0 9.6 0v-1.2A4.8 4.8 0 0 0 12 7.6zm0 1.8a3 3 0 0 1 3 3v1.2a3 3 0 1 1-6 0v-1.2a3 3 0 0 1 3-3zm0 9.6a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M21.1 7.5a2.9 2.9 0 0 0-2-2C17.3 5 12 5 12 5s-5.3 0-7.1.5a2.9 2.9 0 0 0-2 2A30.7 30.7 0 0 0 2.5 12c0 1.5.1 3 .4 4.5a2.9 2.9 0 0 0 2 2c1.8.5 7.1.5 7.1.5s5.3 0 7.1-.5a2.9 2.9 0 0 0 2-2c.3-1.5.4-3 .4-4.5s-.1-3-.4-4.5zM10.2 15.2V8.8l5.5 3.2-5.5 3.2z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.3 1.4-1.3h1.5V5.6a20.5 20.5 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8v2h-2.5V14h2.5v7h3z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 2 3 6.8v6.4c0 5 3.6 7.8 9 8.8 5.4-1 9-3.8 9-8.8V6.8L12 2zm0 2.3 6.8 3.6v5.3c0 3.8-2.6 6.1-6.8 7-4.2-.9-6.8-3.2-6.8-7V7.9L12 4.3z" />
    </svg>
  );
}

export default function SocialLinks({ className = "", iconClassName = "" }) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {socialLinks.map((item) => {
        const external = item.href !== "#";
        return (
          <a
            key={item.navn}
            href={item.href}
            aria-label={item.navn}
            className={`grid h-8 w-8 place-items-center rounded-full text-white/80 transition hover:text-[#415791] ${iconClassName}`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon type={item.ikon} />
          </a>
        );
      })}
    </div>
  );
}
