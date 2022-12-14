import Link from 'next/link'
import Layout from '../../components/Layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getToolsData } from '../../lib/tools';

export async function getStaticProps() {
  const allToolsData = getToolsData();
  return {
    props: {
      allToolsData
    },
  };
}
export default function Tools({ allToolsData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>tools</title>
      </Head>
      <ul className={utilStyles.list}>
        {allToolsData.map(({ id }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/tools/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}