import { useState, useReducer, useEffect, useCallback, useRef } from 'react'
import { ReactComponent as Img } from '../../assests/giphy.svg'
import classes from './Giphy.module.scss'
import { SearchBar, Box } from '..'

import { getGifs } from '../api'

const ACTIONS = {
    getTrending: 'getTrending',
    setTrending: 'setTrending'
}

const RATING = {
    G: 'g',
    PG: 'pg-13',
    R: 'r'
}


const reducer = (state, action) => {
    const { gifs, count } = action.payload
    switch (action.type) {
        case ACTIONS.getTrending:
            return {
                gifs: gifs,
                total: count
            }
        case ACTIONS.setTrending:
            return {
                ...state,
                gifs: state.gifs.concat(gifs)
            }
        default:
            return state
    }
}

const Giphy = () => {
    const [state, dispatch] = useReducer(reducer, { gifs: [], total: 0 })
    const [loading, setloading] = useState(true)
    const [rating, setRating] = useState(RATING.G)

    const observer = useRef()

    const refElement = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                gifs(ACTIONS.setTrending)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])


    const gifs = async (reducerFunction, rating, length = state.gifs.length) => {
        setloading(true)
        const data = await getGifs(length, "", rating)
        const gifs = data.gifs,
            total_count = data.total_count
        if (state.gifs.length === total_count) return
        dispatch({
            type: reducerFunction,
            payload: { gifs, count: data.total_count }
        })
        setloading(false)
    }



    useEffect(() => {
        gifs(ACTIONS.getTrending, rating, 0)
    }, [rating])

    return (
        <main>
            <section className={classes.giphy}>
                <div className={classes.sectionHead}>
                    <div className={classes.logo}>
                        <Img />
                    </div>

                    <div className={classes.search}>
                        <SearchBar name='giphy' />
                    </div>
                </div>

                <div className={classes.select}>
                    <p>Rating </p>
                    <select onChange={(event) => setRating(event.target.value)}>
                        <option value={RATING.G}>G</option>
                        <option value={RATING.PG}>PG</option>
                        <option value={RATING.R}>R</option>
                    </select>
                </div>


                <div className={classes.imgAtxt}>
                    {
                        state.gifs.map((gif, index) => (
                            <Box refe={index === state.gifs.length - 5 ? refElement : null} key={index} a={index} src={gif.gifurl} title={gif.title} url={gif.url} />))
                    }
                </div>
                {loading && <p>Loading...</p>}
            </section>
        </main>
    )
}

export default Giphy