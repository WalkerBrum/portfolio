import Link from "next/link";
import Head from 'next/head';
import Layout from '../components/layout';

export default function Projects() {
    return (
      <Layout>
        <h1>Portfólio</h1>
        <h2>
          <Link href="/">Voltar para Home</Link>
        </h2>
      </Layout>
    );
  }