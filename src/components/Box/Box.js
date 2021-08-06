import classes from './Box.module.scss'

const Box = props => {
    const { src, text } = props

    return (
        <div className={classes.box}>
            <div>
                <img src={""} alt="Should be an meme." />
            </div>

            <p>{text || "There is something wrong here."}</p>
        </div>

    )
}

export default Box