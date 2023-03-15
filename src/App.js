import React, { useState } from "react";
import { nanoid } from 'nanoid';
import HeaderTask from "./components/header/headerTask";
import MainTask from "./components/main/mainTask";
import SortArr from "./components/utils/sort";
function id() {
  return nanoid();
}
function timeCreate() {
  return new Date().getTime();
}

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [option, setOption] = useState(0);
  const [modal, setModal] = useState(false);
  const show = tasks.length > 0 ? true : false;

  function add() {
    let taskObj = {
      id: id(),
      textTask: text,
      timeTask: timeCreate(),
      isEdit: false,
      isDone: false
    }
    let copy = [...tasks];
    copy.push(taskObj);
    setTasks(copy);
    setText("")
  }

  function remove(id, event) {
    let container = event.target.closest(".main_wrap-item");
    container.classList.add("_deleteAnim")
    setTimeout(() => {
      setTasks(tasks.filter(el => el.id !== id)) 
    }, 1000);

  }

  function done(id) {
    setTasks(tasks.map(el => {
      if (el.id === id) {
        el.isDone = !el.isDone
      }
      return el

    }))
  }

  function edit(id, event) {
    setTasks(tasks.map(el => {
      if (el.id === id) {
        let copy = Object.assign({}, el);
        copy.textTask = event.target.value;
        return copy
      } else {
        return el
      }
    }))


  }
  function mode(id) {
    setTasks(tasks.map(el => {
      if (el.id === id) {
        let copy = Object.assign({}, el);
        copy.isEdit = !copy.isEdit;
        return copy
      } else {
        return el
      }
    }))
    setModal(!modal)

  }

  function sortTasks(property, event) {
    setOption(event.target.value);
    let copy = [...tasks];
    switch (property) {
      case "Complete":
        copy.sort((a,b)=> a["isDone"] - b["isDone"]);
        break;
      case "Uncompleted":
        copy.sort((a,b)=> b["isDone"] - a["isDone"]);
        break;
      case "New-Old":
        copy.sort((a,b)=> b["timeTask"] - a["timeTask"]);
        break;
      case "Old-New":
        copy.sort((a,b)=> a["timeTask"] - b["timeTask"]);
        break;
      default:
        break;
    }

    setTasks(copy);
  }
  return (
    
    <>
      <header>
        <HeaderTask text={text} show={show} count={tasks.length} setText={setText} addTask={add} />
      </header>
      <main>
        <SortArr show={show} option={option} sortTasks={sortTasks}/>
        <MainTask
          show={show}
          tasks={tasks}
          modal={modal}
          removeTask={remove}
          doneTask={done}
          editTask={edit}
          toggleMode={mode}
        />
      </main>
      <footer></footer>
    </>
  )
}

export default App;
