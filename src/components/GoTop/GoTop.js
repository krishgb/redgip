import classes from './GoTop.module.scss'
import { ReactComponent as Img } from '../../assests/arrow.svg'
import { createRef } from 'react'


const GoTop = () => {

    const btn = createRef()

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.current.style.display = "block";
        } else {
            btn.current.style.display = "none";
        }
    }

    const gotop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button ref={btn} onClick={gotop} className={classes.gotop}>
            <Img />
        </button>
    )
}

export default GoTop