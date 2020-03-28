import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/pageCSS/styles.module.css';

const Home = () => (
  <div className="container">
    <Head>
      <title>Home page</title>
    </Head>
    <Link href="/name">
      <a>Search by name</a>
    </Link>

    <br/>

    <Link href="/id">
      <a>Search by ID</a>
    </Link>

    <br/>
    
    <Link href="/type">
      <a>Search by type</a>
    </Link>
  </div>
)

export default Home