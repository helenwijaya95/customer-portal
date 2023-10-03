import { Component } from "react"
import Header from "./Header"
import UIProvider from "./providers/UIProvider"
import Footer from "./Footer"

class Layout extends Component {
  render() {
    const { children, logout, user, headerList, footerList } = this.props
    return (
      <UIProvider>
        <Header logout={logout} user={user} list={headerList} />
        {children}
        <Footer list={footerList} />
      </UIProvider>
    )
  }
}

export default Layout