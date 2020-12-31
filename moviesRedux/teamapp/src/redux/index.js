
import {configureStore} from '@reduxjs/toolkit'
import MovieReducer from './movies'
import showReducer from './tvshows'
const redux = require("redux")
// const {combineReducers, createStore} = redux


// const rootReducer = combineReducers({
//     movies: MovieReducer,
//     shows: ShowReducer
// })

const store = configureStore({
    reducer: {
        movies: MovieReducer,
        shows: showReducer
    }
})

export default store
