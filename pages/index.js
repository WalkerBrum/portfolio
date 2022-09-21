import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Nav from '../components/nav';

export default function Home() {
  return (
    <>

    <Layout>

      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1 className="title">
          Meus <Link href="/projects">Projetos!</Link>
        </h1>

        <Image 
          src="/images/foto-walker.jpg"
          height={400} 
          width={400} 
          alt="Walker Lobato"
        />
      </main>
      
     </Layout>
    </>
    
  )
}
