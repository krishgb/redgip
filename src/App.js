import { useState, createContext } from 'react'
import classes from './App.module.scss'
import { Header, Body, Footer, GoTop } from './components'

const page = {
  giphy: 'giphy',
  reddit: 'reddit'
}

export const PageContext = createContext()

const App = () => {

  const [current, setCurrentPage] = useState(page.giphy)

  const changePage = (pg) => setCurrentPage(pg)

  return (
    <div className={classes.app}>

      <PageContext.Provider value={{ page, current }}>
        <Header changePage={changePage} />
        <Body />
      </PageContext.Provider>

      <Footer />
      <GoTop />
    </div>)
}

export default App