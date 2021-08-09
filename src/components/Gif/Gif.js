import classes from './Gif.module.scss'

const Box = props => {
    const { src, title, refe, url, a } = props

    return (
        <a
            className={classes.box}
            ref={refe}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <div>
                <img src={src} alt="Should be an meme." id={a} loading="lazy" />
            </div>

            <p>{title || "There is something wrong here."}</p>
        </a>
    )
}

export default Box