import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Celo FAQ</title>
        <meta name="keywords" content="Celo, blockchain" />
        <meta
          name="description"
          content="Frequently asked questions about Celo"
        />

        {process.browser && (
          <script
            async
            defer
            data-domain="celofaq.com"
            src="https://stats.celofaq.com/js/index.js"
          />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
