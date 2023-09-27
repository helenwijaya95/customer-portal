import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/providers/AuthProvider'
import UIProvider from '@/components/providers/UIProvider'
import StoreProvider from '@/components/providers/StoreProvider'
import { Container } from '@chakra-ui/react'
import AuthWrapper from '@/components/AuthWrapper'
import ErrorBoundary from '../components/ErrorBoundary'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Portal',
  description: 'A portal for customers to monitor their insurance portfolio, manage claims, etc.',
}

export default function RootLayout({ children }) {
  const headerList = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Claim', path: '/claim' },
    { name: 'My Coverage', path: '/my-coverage' }
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
  return (
    <html lang="en">
      <body className={openSans.className}>
        <>
          <ErrorBoundary>
            <StoreProvider>
              <AuthProvider>
                <UIProvider>
                  <Header list={headerList} />
                  <Container p='10px' maxW="900px" className="content-wrapper">
                    <AuthWrapper>
                      {children}
                    </AuthWrapper>
                  </Container>
                  <Footer list={footerList} />
                </UIProvider>
              </AuthProvider>
            </StoreProvider>
          </ErrorBoundary>
        </>
      </body>
    </html >
  )
}
