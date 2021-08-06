import classes from './Reddit.module.scss'
import { ReactComponent as Img } from '../../assests/reddit.svg'
import { SearchBar } from '..'

const Reddit = () => {



    return (
        <section className={classes.reddit}>
            <div className={classes.sectionHead}>
                <div className={classes.logo}>
                    <Img />
                </div>

                <div className={classes.search}>
                    <SearchBar name='reddit' />
                </div>
            </div>
        </section>
    )
}

export default Reddit