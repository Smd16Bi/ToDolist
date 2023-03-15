import React from "react";
import './sort.css'


let options = ["Complete", "Uncompleted","New-Old", "Old-New"];

let result = options.map((el, index) => {
    return <option value={index} key={index}>{el}</option>
})


function SortArr({ option, sortTasks, show}) {
    return (
        <>  { show && 
            <div  className="sort page-width">
            <span>Sort by: </span>
             <select value={option} onChange={event => sortTasks(options[option],event)}>
                {result}
            </select>
            </div>
            }
        </>
    )
}

export default SortArr