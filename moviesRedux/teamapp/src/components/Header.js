import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
    return(
        <header>
            <ul className="nav">
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/Movies">Movies</Link></li>
               <li> <Link to="/TvShows">Tv Shows</Link></li>
            </ul>
        </header>
    )
}

export default Header