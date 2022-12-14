import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout';

const Lexia = dynamic(() => import('../../components/pages/tools/lexia'), {
    suspense: true,
})

export default function LexicaPage() {
    return (
        <Layout home={false}>
            <Head>
                <title>AI 生成图片</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <Suspense fallback={`Loading Lexica...`}>
                <Lexia/>
            </Suspense>
        </Layout>
    )
}
