import Head from 'next/head';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Introduce from '../components/introduce';
import Resume from '../components/resume';
import Courses from '../components/courses';


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
        <Resume />
        <Courses />
        
      </main>

     </Layout>
    
  )
}
