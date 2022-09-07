import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tor Henning Egenes - Web-utvikler</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <main className="bg-gray-50 text-gray-900">
        <article>
          <p>This is a article</p>
        </article>
      </main>

      <footer></footer>
    </>
  );
}
