import Layout from '../../components/layout';
import { getAllToolIds,getToolData } from '../../lib/tools';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
    const toolData = await getToolData(params.id);
    return {
        props: {
            toolData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllToolIds();
    return {
        paths,
        fallback: false,
    };
}
export default function Post({ toolData }) {
    return (
      <Layout>
        <Head>
          <title>{toolData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{toolData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: toolData.contentHtml }} />

        </article>
      </Layout>
    );
  }