import React, { useMemo } from 'react';
import Link from 'next/link'
import Layout from '../../components/Layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getToolsData } from '../../lib/tools';
import { description } from '../../components/pages/tools/lexia';
import Description from '../../components/Description';
export async function getStaticProps() {
  const allToolsData = getToolsData();
  return {
    props: {
      allToolsData
    },
  };
}

export default function Tools({ allToolsData }) {
  const data = useMemo(() => {

  }, [])
  return (
    <Layout home={false}>
      <Head>
        <title>tools</title>
      </Head>
      <ul>
        {allToolsData.map(({ id }) => {
          return <li className={`${utilStyles.listItem} `} key={id}>
            <Link href={`/tools/${id}`}>{id}</Link>
            <Description text={description} className={utilStyles.between_title_description}></Description>
          </li>

        })}
      </ul>
    </Layout>
  )
}