// import classes from './App.module.scss'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GoTop, Footer, Header } from './components'

const Giphy = lazy(() => import('./components/Giphy/Giphy'))
const Reddit = lazy(() => import('./components/Reddit/Reddit'))
const SearchedGifs = lazy(() => import('./components/SearchedGifs/SearchedGifs'))

const App = () => {

  return (
    <>
      <Router >

        <Suspense fallback="Loading...">

          <Route exact path='/' >
            <Header />
            <Giphy />
          </Route>

          <Route exact path='/giphy/:a([\w\W]+)' >
            <Header />
            <SearchedGifs />
          </Route>

          <Route exact path='/reddit'>
            <Header />
            <Reddit />
          </Route>

          <Route exact path='/reddit/:a([\w\W]+)'>
            <Header />
            <Reddit />
          </Route>

        </Suspense>
      </Router>

      <Footer />
      <GoTop />
    </>
  )
}

export default App