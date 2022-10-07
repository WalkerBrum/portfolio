import Head from 'next/head';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Introduce from '../components/Introduce';

export default function Home() {
  return (

    <Layout>

      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>

        <Introduce />

      </main>

     </Layout>
    
  )
}
