import '../styles/pure-min.css';
import '../styles/grids-responsive-min.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>收藏集，小工具，有趣的网站</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <Component {...pageProps} />
  </>;
}