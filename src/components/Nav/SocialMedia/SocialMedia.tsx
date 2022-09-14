import React from "react";

export function SocialMedia() {
  const links: { key: number; src: string; href: string; alt: string }[] = [
    {
      key: 1,
      src: "/images/github-icon.png",
      href: "https://www.github.com/dandyreyes",
      alt: "github",
    },
    {
      key: 2,
      src: "/images/linkedin-icon.png",
      href: "https://www.linkedin.com/in/dandy-reyes",
      alt: "linkedin",
    },
    {
      key: 3,
      src: "/images/email-icon.png",
      href: "mailto:dandyjreyes@gmail.com",
      alt: "email",
    },
  ];
  return (
    <>
      {links.map(({ key, src, href, alt }) => (
        <a key={key} href={href}>
          <img src={src} alt={alt} />
        </a>
      ))}
    </>
  );
}
