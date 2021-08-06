import classes from './Header.module.scss'
import { useContext } from 'react'
import { PageContext } from '../../App'

const Header = ({ changePage }) => {

    const { page, current } = useContext(PageContext)

    const style = `
        li[data-name=${current}]{
            background: red;
            color: white;
        }
    `

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                RedGip
            </h1>
            <ul>
                <style>
                    {style}
                </style>
                <li data-name={page.giphy} onClick={event => changePage(event.target.dataset.name)}>Giphy</li>
                <li data-name={page.reddit} onClick={event => changePage(event.target.dataset.name)}>Reddit</li>
            </ul>
        </header>
    )
}

export default Header