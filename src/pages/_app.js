import '@/styles/globals.css'
import { getUserFromSession } from "../context/authContext";
import App from "next/app";
import Head from 'next/head';
import { wrapper } from "../store/store";
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps, user }) {
  const getLayout = Component.getLayout || ((page) => page);
  const headerList = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]
  const footerList = [
    {
      header: 'Contact',
      children: ['link 1', 'link 2', 'link 3']
    },
    {
      header: 'About',
      children: ['link 1']
    },
    {
      header: 'Explore',
      children: ['link 1', 'link 2', 'link 3']
    },
    {
      header: 'Solution',
      children: ['link 1', 'link 2',]
    }
  ]
  async function logout(router) {
    const res = await fetch("/api/auth/logout");
    const data = await res.json();
    if (data.status === 200) {
      router.push("/");
    }
  }

  return (
    <>
      <Head>
        <title>Customer Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Loader placement */}
      {getLayout(
        <Layout
          logout={logout}
          user={user}
          headerList={headerList}
          footerList={footerList}>
          <Component {...pageProps} />
        </Layout>)}
    </>

  )
}

MyApp.getInitialProps = async (appContext) => {

  if (appContext.router.isSsr === undefined) {
    const appProps = await App.getInitialProps(appContext);
    const user = await getUserFromSession(appContext.ctx)
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
}

export default wrapper.withRedux(MyApp);
