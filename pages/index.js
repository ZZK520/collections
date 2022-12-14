import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <article className="content pure-u-1 pure-u-md-3-4">
      <h1>This is home</h1>
      </article>
      
    </Layout>
  );
}