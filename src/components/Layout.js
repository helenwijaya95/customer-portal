import { Component } from "react"
import Header from "./Header"
import UIProvider from "./providers/UIProvider"
import Footer from "./Footer"
import { Container } from "@chakra-ui/react"

class Layout extends Component {
  render() {
    const { children, logout, user, headerList, footerList } = this.props
    return (
      <UIProvider>
        <Header logout={logout} user={user} list={headerList} />
        <Container p='10px' maxW="900px" className="content-wrapper">
          {children}
        </Container>
        <Footer list={footerList} />
      </UIProvider>
    )
  }
}

export default Layout