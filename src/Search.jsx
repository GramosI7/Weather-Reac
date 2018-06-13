import React from "react";

const Search = (props) => {
    return (
        <div className="input-group">
                <input value={props.value} onChange={props.getInput} type="text" className="form-control" placeholder="City" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div  className="input-group-append">
                <button onClick={props.btnSearch} className="btn" type="button">Go !</button>
            </div>
        </div>
    )
}

export default Search;  