import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ta">
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
