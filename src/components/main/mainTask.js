import React from "react";
import BodyTask from "./bodyTask";
import './mainTask.css'

function MainTask({tasks, removeTask,doneTask,editTask,toggleMode,show,modal, }) {
    const result = tasks.map( (el,index) => {
        return <BodyTask 
            id={el.id} 
            key={el.id} 
            textTask={el.textTask} 
            isEdit={el.isEdit} 
            isDone={el.isDone} 
            index={index} 
            removeTask={removeTask}
            doneTask={doneTask}
            editTask={editTask}
            toggleMode={toggleMode}
            modal={modal}
            />
    })
    let heading = show ? <h1 className="main__title">List to do</h1> :  <h1 className="main__title">Our list is empty</h1>
    return (<>
        <div className="main_wrap page-width">
            {heading}
            <div className="main_wrap-grid">
            {result}
            </div>
        </div>
    </>)
}

export default MainTask