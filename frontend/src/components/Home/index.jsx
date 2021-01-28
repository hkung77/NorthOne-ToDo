import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

import Header from "../shared/Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import EditModal from "./EditModal";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editTask, setEditTask] = useState(-1);

  const addToDoItem = (toDoItem) => {
    console.log(toDoItem);
    setToDoList([toDoItem, ...toDoList]);
  };

  const removeToDoItem = (index) => {
    const list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  const dismissEditModal = () => {
    setEditTask(-1);
  };

  return (
    <div>
      <Header />
      <Container>
        <Accordion>
          <ToDoForm addToDoItem={addToDoItem} />
        </Accordion>
        <ToDoList
          list={toDoList}
          removeToDoItem={removeToDoItem}
          setEditTask={setEditTask}
        />
      </Container>
      <EditModal show={editTask >= 0} onHide={dismissEditModal} />
    </div>
  );
};

export default Home;
