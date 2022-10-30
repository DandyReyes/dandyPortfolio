import "src/components/App.scss";
import Head from "next/head";
import * as React from "react";

export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <title>Dandy Reyes, your favorite developer</title>
        <meta
          name="description"
          content="Front End Developer | UI Developer | React Developer"
        />
        <meta
          name="keywords"
          content="Dandy, Dandy Reyes, React, Next.js, UI Developer, React Developer, Front End Developer"
        />
      </Head>
      <Component className="app" {...pageProps} />
    </div>
  );
}
