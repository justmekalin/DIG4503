import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/pageCSS/styles.module.css';
import IdSearch from '../components/IdSearch';

const ID= ()=>{
    return(
        <div className={styles.head}>
            <Head>
                <title>IdSearch</title>
            </Head>
            <Link href="/name">
                <a>Search by name</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>
            
            <IdSearch/>
            <div id="reportingArea">

            </div>
        </div>
    )
}

export default ID;