import React from 'react'
import {useSelector} from "react-redux"


function Movies(props) {
    const movies = useSelector(state => state.movies)
  
    let newMovies = movies.map(movie => { return <li>{movie}</li>})
    return(
        
        <ul>{newMovies}</ul>
    )
}


export default Movies 