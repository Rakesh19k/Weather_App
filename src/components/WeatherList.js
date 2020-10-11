import React, { Component } from 'react'
import Axios from 'axios'
import Searchcountry from './SearchBar'

class WeatherList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            Data : {},
            search : ""
        }
    }
    

    // Updating Input

    changeHandler = (event) => {
        this.setState ({
            search : event.target.value
            
        })
        // console.log(event.target.value)
    }

    async componentDidMount () {
        await Axios.get("https://api.first.org/data/v1/countries")
        .then (res => {
            console.log(res)
            this.setState({Data : res.data})
        })

        .catch(error => {
            console.log(error)
            this.setState({errorMsg : "Something is wrong!!!"})
        })
    }
    
    render() {

        const {Data, errorMsg} = this.state

        return (
            <>
                <div className="container form-group d-flex mt-4">                   
                        <input type="text" class="form-control" style={{height: 37}} 
                            onChange={this.changeHandler} 
                            placeholder="Search country ........."></input> 
                        <button type="button" class="btn btn-dark ml-2">Search</button>
                </div>
               

                {errorMsg ? <div>{errorMsg}</div> : null }

            </>
        )
    }
}

export default WeatherList
