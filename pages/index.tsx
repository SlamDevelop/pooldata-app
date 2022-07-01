import type { NextPage } from 'next';
import Head from 'next/head';
import AuthModal from '../src/components/AuthModal';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Demo components application</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <AuthModal />
    </div>
  )
}

export default Home;