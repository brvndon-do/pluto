import Head from 'next/head';
import { Header } from '../components';

const Home = () => (
  <>
    <Head>
      <title>Pluto | Anime, Manga, and Manhwa</title>
      <meta name="description" content="Created by Brandon Do" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header />
    </main>
  </>
);

export default Home;
