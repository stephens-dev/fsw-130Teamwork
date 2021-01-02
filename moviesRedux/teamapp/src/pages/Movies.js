import React, {useState} from 'react'
import {useSelector} from "react-redux"
import pic2 from './images/movie_night.jpg'
import {connect } from 'react-redux'
import {addMovie, removeMovie} from '../redux/movies.js'

function Movies(props) {
    const movies = useSelector(state => state.movies)
    const initInputs = {movie: props.movie ||""}
    const [inputs, setInputs] = useState(initInputs)
    const [movie,setMovie] = useState()
  

    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]: value}))
      
  }

  function handleSubmit(e){
      if(inputs.movie !== ""){
         
      e.preventDefault()
      setMovie(props.addMovie(inputs.movie))
      }
      
      setInputs(initInputs)
    }
    function removeMovie(e){
        if(inputs.movie === ""){
            alert("Please enter the name of the movie you would like to delete.")
        }
        e.preventDefault()
        setMovie(props.removeMovie(inputs.movie))
        console.log(inputs)
        setInputs(initInputs)
      }
    let newMovies = movies.map(movie => {
        return <><form className="list_container"><div className="list_item">
                {movie}
                </div></form></>})
    return(
        <>
             <div className="container">
            <div className="item item1">
                
            <form>
            <input type="text" name="movie" value={inputs.movie} onChange={handleChange} placeholder="Name of Movie" required/><br></br>
            <button onClick={handleSubmit}>Add Movie</button>
            <button className="delete-btn" onClick={removeMovie}>Delete Movie</button>
            </form>
            <img src={pic2}></img>
            </div>
            <div className="item item2">
            <h1>My Favorite Movies</h1>
                <div>
                {newMovies}
                </div>
                </div>
                </div> 
           
        {/* <img src={pic2} className="movie_image"></img> */}
        
        {/* </div> */}
        </>
    )
}

const mapStateToProps = state =>{
    return{
      movie: state.movie
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return{
      addMovie: (movie) => dispatch(addMovie(movie)),
      removeMovie: (movie) => dispatch(removeMovie(movie))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Movies)