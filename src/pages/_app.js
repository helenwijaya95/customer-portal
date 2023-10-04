import '@/styles/globals.css'
import App from "next/app";
import Head from 'next/head';
import Layout from '@/components/Layout';
import { getUserFromSession } from "../context/authContext";
import { wrapper } from "../store/store";
import { useDispatch } from 'react-redux';
import { setUserState } from '@/store/userSlice';
function MyApp({ Component, pageProps, user }) {
  const getLayout = Component.getLayout || ((page) => page);
  const dispatch = useDispatch();

  const NAV_LIST = [
    { name: 'Home', path: '/' },
    // { name: 'Portfolio', path: '/portfolio' },
  ]

  const FOOTER_LIST = [
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
      dispatch(setUserState({}))
      router.push("/")
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
          headerList={NAV_LIST}
          footerList={FOOTER_LIST}>
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
