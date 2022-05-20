import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Co.together</title>
        <meta name="description" content="給小團隊的任務管理 Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
