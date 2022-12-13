import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getToolsData } from '../lib/tools';
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allToolsData=getToolsData();
  return {
    props: {
      allPostsData,
      allToolsData
    },
  };
}
export default function Home({ allPostsData,allToolsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header></Header>
      <section className={utilStyles.headingMd}>
        <p>[我是朱志康，I’m currently learning Three.js,Vue3,Big Data,Linux]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <ul className={utilStyles.list}>
          {allToolsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/tools/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}