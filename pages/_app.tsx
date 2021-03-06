import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import Head from 'next/head';

import { Footer } from '../components';

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

      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <div style={{ flex: '1 0 auto' }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
