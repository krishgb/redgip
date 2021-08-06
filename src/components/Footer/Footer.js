import classes from './Footer.module.scss'

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <h3>RedGip</h3>
            <p>RedGip Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer