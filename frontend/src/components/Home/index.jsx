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

  return (
    <div>
      <Header />
      <Container>
        <Accordion>
          <ToDoForm addToDoItem={addToDoItem} />
        </Accordion>
        <ToDoList list={toDoList} removeToDoItem={removeToDoItem} />
      </Container>
    </div>
  );
};

export default Home;
