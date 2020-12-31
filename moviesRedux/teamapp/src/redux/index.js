
import {configureStore} from '@reduxjs/toolkit'
import MovieReducer from './movies'
const redux = require("redux")
// const {combineReducers, createStore} = redux


// const rootReducer = combineReducers({
//     movies: MovieReducer,
//     shows: ShowReducer
// })

const store = configureStore({
    reducer: {
        movies: MovieReducer
    }
})

export default store
