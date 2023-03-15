import React from "react";
import './headerTask.css'
import img from '../img/logo.png';
function HeaderTask({ text, setText, addTask,count, show }) {
    let disabledBtn = text.length === 0 && true


    function handleChange(event) {
        setText(event.target.value)
    }
  

    return <>
            <div className="header page-width">
                <div className="header__logo">
                    <img src={img} alt="logo" />
                    <p className="header__logo-title">List
                    <span className="header__logo-count">{show && count}</span>
                    </p>

                </div>
                <div className="header__input"><input type="text" value={text} onChange={handleChange} /></div>
                <div className="header__button">{disabledBtn ?  <button  disabled  onClick={addTask}>Add new task</button> :  <button   onClick={addTask}>Add new task</button> }  </div>
            </div>
    </>
}

export default HeaderTask