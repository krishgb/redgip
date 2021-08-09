import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => {

    // const [current, setCurrent] = 

    const style = `
        li[data-name=${window.location.pathname.slice(1).split('/')[0] || 'giphy'}]{
            background: white;
            color: black;
        }
    `

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <span className={classes.red}>Red</span>
                <span className={classes.tored}>Gip</span>
                {/* RedGip */}
            </h1>
            <ul>
                <style>
                    {style}
                </style>
                <Link to='/' style={{ textDecoration: 'none', color: "white" }}>
                    <li data-name="giphy" >Giphy</li>
                </Link>
                <Link to='/reddit' style={{ textDecoration: 'none', color: "white" }}>

                    <li data-name="reddit" >Reddit</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header