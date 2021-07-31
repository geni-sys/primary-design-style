import Head from "next/head";

import { DevForm } from "../components/DevForm";
import { DevItem } from "../components/DevItem";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | fuutball</title>
        <meta name="description" content="fuutball Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <aside>
          <strong>Cadastrar</strong>
          <DevForm />
        </aside>

        <main>
          <ul>
            <DevItem />
            <DevItem />
            <DevItem />
          </ul>
        </main>
      </main>
    </div>
  );
}
