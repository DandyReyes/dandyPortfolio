import "src/components/App.scss";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Dandy Reyes, your favorite developer",
  description: "Front End Developer | UI Developer | React Developer",
  keywords:
    "Dandy, Dandy Reyes, React, Next.js, UI Developer, React Developer, Front End Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="app">{children}</body>
    </html>
  );
}
