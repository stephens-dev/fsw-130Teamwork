import React, {useState} from 'react'
import {useSelector} from "react-redux"
import pic from './images/tv2.jpg'
import {addShow, removeShow} from '../redux/tvshows.js'
import {connect } from 'react-redux'


function TvShows(props) {
    const shows = useSelector(state => state.shows)
    const initInputs = {show: props.show ||""}
    const [inputs, setInputs] = useState(initInputs)
    const [show,setShow] = useState()

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        
    }
  
    function handleSubmit(e){
        if(inputs.show !== ""){
           
        e.preventDefault()
        setShow(props.addShow(inputs.show))
        }
        
        setInputs(initInputs)
      }
      function removeShow(e){
          if(inputs.show === ""){
              alert("Please enter the name of the tv show you would like to delete.")
          }
          e.preventDefault()
          setShow(props.removeShow(inputs.show))
          console.log(inputs)
          setInputs(initInputs)
        }
    let newShows = shows.map(show => {  return <><form className="list_container"><div className="list_item">
    {show}
    </div></form></>})
    
        return(
            <>
                 <div className="container">
                <div className="item item1">
                    
                <form>
                <input type="text" name="show" value={inputs.show} onChange={handleChange} placeholder="Name of TV show" required/><br></br>
                <button onClick={handleSubmit}>Add TV Show</button>
                <button className="delete-btn" onClick={removeShow}>Delete TV Show</button>
                </form>
                <img src={pic}></img>
                </div>
                <div className="item item2">
                <h1>My Favorite TV Shows</h1>
                    <div>
                    {newShows}
                    </div>
                    </div>
                    </div> 
               
            {/* <img src={pic2} className="show_image"></img> */}
            
            {/* </div> */}
            </>
        )
    }
    
    const mapStateToProps = state =>{
        return{
          show: state.show
        }
      }
      
      
      const mapDispatchToProps = dispatch => {
        return{
          addShow: (show) => dispatch(addShow(show)),
          removeShow: (show) => dispatch(removeShow(show))
        }
      }


export default connect(mapStateToProps,mapDispatchToProps)(TvShows)