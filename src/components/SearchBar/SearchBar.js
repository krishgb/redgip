import classes from './SearchBar.module.scss'
import { ReactComponent as Search } from '../../assests/search.svg'
import { useState } from 'react'

const SearchBar = ({ name, setSearch }) => {

    const [inputSearches, setInputSearches] = useState(sessionStorage.getItem(name)?.split(',') || [])

    const formHandler = (event) => {
        event.preventDefault()

        const inputValue = event.target.children[0].value
        setSearch(inputValue)

        if (!inputValue.trim()) return

        const newInputSearches = [...new Set([...inputSearches, inputValue])]
        setInputSearches(newInputSearches)
        sessionStorage.setItem(name, newInputSearches)

    }


    return (
        <form onSubmit={formHandler} className={classes.form}>
            <input list="in" />
            <datalist id="in">
                {inputSearches.map((search, i) => (
                    <option key={i}>{search}</option>
                ))}
            </datalist>

            <button>
                <Search color="white" />
            </button>
        </form>
    )

}

export default SearchBar