import React from "react";
import './modal.css'


function Modal({textTask,id,editTask, toggleMode}) {
    return (
        <>
            <div className="modal" onClick={() => { toggleMode(id) }}>
                <div className="modal_container" onClick={event => event.stopPropagation()}>
                    <input type="text"
                        value={textTask}
                        onChange={(event) => { editTask(id, event) }}
                        onBlur={() => { toggleMode(id) }}
                    />
                </div>
            </div>
        </>
    )
}


export default Modal