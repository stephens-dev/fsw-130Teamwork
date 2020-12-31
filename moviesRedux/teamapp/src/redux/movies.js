import Axios from 'axios'

export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

export function getAllMovies() {
    return{
        type: "GET_MOVIES"
    }
}

// let state = Axios.get('localhost:9000/movies')
// .then(res => {
//     this.setState({movies: res.data.results})
//     })
//     .catch(err => console.log(err))

export default function MovieReducer(movies = ["Lion King", "Frozen"], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "REMOVE_MOVIE": {            
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_MOVIES":
            return movies
        default:
            return movies
    }
}