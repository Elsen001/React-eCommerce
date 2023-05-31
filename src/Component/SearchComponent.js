import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchItems } from '../redux/SearchSlice'
import MainContainer from './MainContainer'
import SearchComponentKeyup from './SearchComponentKeyup'
import { useEffect } from 'react'

const SearchComponent = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchItem = useSelector(state => state.search.item.products)

    const [style, setStyle] = useState("none")

    const getproduct = (e) => {
        setKeyword(e.target.value)
    }



    const getData = (e) => {
        setKeyword(e.target.value)
        if (keyword.length > 0) {
            dispatch(searchItems(keyword))
            setStyle("block")
        } else {
            setStyle("none")
        }
    }
    useEffect(() => {

    }, [keyword])



    const onSubmit = (e) => {
        e.preventDefault()
        if (keyword.length > 0) {
            dispatch(searchItems(keyword))
            navigate("/search")
            setKeyword("")
        }
    }
    return (
        <div className="search">
            <form onSubmit={onSubmit} action="">
                <input value={keyword} onChange={getproduct} onKeyUp={getData} type="text" placeholder='Enter your product name...' />
                <i onClick={onSubmit} className="fa-solid fa-magnifying-glass"></i>
            </form>
            <div style={{ display: style }} className="searchContainer">
                <SearchComponentKeyup keyword={keyword} searchItem={searchItem} />
            </div>
        </div>
    )
}

export default SearchComponent
