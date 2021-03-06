// import { useContext } from 'react'
// import { PageContext } from '..'
import { Giphy, Reddit } from '..'

import classes from './Body.module.scss'

const Body = ({ page, current }) => {

    // const { page, current } = useContext(PageContext)

    return (
        <main className={classes.main}>
            {page.giphy === current && <Giphy />}
            {page.reddit === current && <Reddit />}
        </main>
    )
}

export default Body