import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="keywords" content="Next.js" />
        <meta name="description" content="Next.js" />
        <title>Next.js</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}