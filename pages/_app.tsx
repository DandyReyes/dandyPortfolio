import "src/components/App.scss";
import * as React from "react";

export default function App({ Component, pageProps }: any) {
  return <Component className="app" {...pageProps} />;
}
