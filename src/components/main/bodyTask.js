import React from "react";
import pensil from '../img/edit.png';
import bucket from '../img/bucket.png';
import Modal from "../utils/modal";

function BodyTask({ id, textTask, isEdit, isDone, index, removeTask, doneTask, editTask, toggleMode, modal,  }) {
    let markup;
    let popup
    if (isEdit) {
        popup =  modal && <Modal textTask={textTask} id={id} editTask={editTask} toggleMode={toggleMode} /> 
        markup = <div className="item">
            <input type="text" 
                value={textTask} 
                onChange={(event) => { editTask(id, event) }} 
                onBlur={()=>{toggleMode(id)}}
            />
        </div>
       
    } else {
        markup = <div className="item">
            <input type="checkbox" checked={isDone} onChange={() => { doneTask(id) }} />
            <p className="item-text">
            <span className="item-text-position">{index + 1}:</span>
            <span className={ isDone ? "item-text-task complete" : "tem-text-task"} >{textTask}</span>
            </p>
            <div className="item__btns">
            <button className="btns_edit" onClick={()=>{toggleMode(id)}}><img src={pensil} alt="pensil" /></button>
            <button  className="btns_add"onClick={(event) => {removeTask(id, event) }}><img src={bucket} alt="bucket" /></button>
            </div>
        </div>
    }
    return (
        <div key={id} className="main_wrap-item">
            {markup}
            {popup}
        </div>
    )
}

export default BodyTask;