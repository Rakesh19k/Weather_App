import React from 'react'
import "./Form.css"

function Form(props) {
    return (
        <div className="container my-2">
            <>{props.error? error():null}</>
            <form className="mx-5" onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button className="btn btn-warning">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
};


function error () {
    return(
        <div className="alert alert-warning mx-5" role="alert" >
            Please Enter the City and Country
        </div>
    )
}

export default Form;
