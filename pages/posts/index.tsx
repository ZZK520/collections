import Link from 'next/link'
import Layout from '../../components/Layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds } from '../../lib/posts';

export async function getStaticProps() {
    const postData = await getAllPostIds();
    return {
        props: {
            postData,
        },
    };
}
export default function Posts({ postData }) {
    return (
        <Layout home={false}>
            <Head>
                <title>posts</title>
            </Head>
            <ul className={utilStyles.list}>
                {postData.map(({params}) => {
                    const id = params?.id;
                    return <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{id}</Link>
                    </li>
                })}
            </ul>
        </Layout>
    )
}