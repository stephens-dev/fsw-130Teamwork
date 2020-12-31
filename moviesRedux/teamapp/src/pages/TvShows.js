import React from 'react'
import {useSelector} from "react-redux"


function TvShows(props) {
    const shows = useSelector(state => state.shows)
  
    let newShows = shows.map(show => { return <li>{show}</li>})
    return(
        <ul>{newShows}</ul>
    )
}


export default TvShows 