export function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}

export function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}

export function getAllShows() {
    return{
        type: "GET_SHOWS"
    }
}

export default function showReducer(shows = ["Supernatural", "Game of Thrones"], action) {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload]
        case "REMOVE_SHOW": {            
            const updatedArr = shows.filter(show => show.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_SHOWS":
            return shows
        default:
            return shows
    }
}