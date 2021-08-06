import classes from './Giphy.module.scss'
import { ReactComponent as Img } from '../../assests/giphy.svg'
import { useState } from 'react'
import { SearchBar, Box } from '..'

const Giphy = () => {

    const [search, setSearch] = useState('')

    return (
        <section className={classes.giphy}>
            <div className={classes.sectionHead}>
                <div className={classes.logo}>
                    <Img />
                </div>

                <div className={classes.search}>
                    <SearchBar name='gihhy' setSearch={setSearch} />
                </div>
            </div>


            <div className={classes.imgAtxt}>
                {
                    [...Array(10).keys()].map(
                        ar =>
                            <Box key={ar} />

                    )
                }
            </div>

        </section>
    )
}

export default Giphy