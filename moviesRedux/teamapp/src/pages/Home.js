import React from 'react'
import pic from './images/movie.jpg'
import pic2 from './images/tv.jpg'
import {Link} from 'react-router-dom'


function Home() {
    return(
        <div className="main_container">
            <Link to="/Movies" id="link">
            <div className="movie_display">
                    <h1>Movies</h1>
                    <img src={pic}></img>
                    
            </div>
            </Link>
            <Link to="/TvShows" id="link">
            <div className="show_display">
                    <h1>TV Shows</h1>
                    <img src={pic2}></img>
            </div>
            </Link>
        </div>
    )
}


export default Home