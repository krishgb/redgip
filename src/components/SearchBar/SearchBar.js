import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './SearchBar.module.scss'
import { ReactComponent as Search } from '../../assests/search.svg'

const SearchBar = ({ name }) => {

    const [inputSearches, setInputSearches] = useState(sessionStorage.getItem(name)?.split(',') || [])
    const [inputValue, setInputValue] = useState('')

    const formHandler = (event) => {
        event.preventDefault()


        if (!inputValue.trim()) return

        const newInputSearches = [...new Set([...inputSearches, inputValue])]
        sessionStorage.setItem(name, newInputSearches)
        setInputSearches(newInputSearches)

    }


    return (
        <form onSubmit={formHandler} className={classes.form}>
            <div>

                <input list="in" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            </div>
            <datalist id="in">
                {inputSearches.map((search, i) => (
                    <option key={i}>{search}</option>
                ))}
            </datalist>

            <Link to={`/${name}/${inputValue}`}>
                <button>
                    <Search color="white" />
                </button>
            </Link>

            <span hidden={1} style={{ textAlign: 'center', margin: 'auto' }}>Go Back</span>
        </form>
    )

}

export default SearchBar