import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

import Header from "../shared/Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import EditModal from "./EditModal";

const Home = () => {
  // Core state for to-do items
  const [toDoList, setToDoList] = useState([]);

  // Keeps track of which task in the array is selected to edit
  const [editTask, setEditTask] = useState(-1);

  // Adds a to-do item to the list
  const addToDoItem = (toDoItem) => {
    setToDoList([toDoItem, ...toDoList]);
  };

  // Removes a to-do item from the list for a given index
  const removeToDoItem = (index) => {
    const list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  // Dismisses the edit modal
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
      {editTask >= 0 ? (
        <EditModal
          editTask={editTask}
          onHide={dismissEditModal}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      ) : null}
    </div>
  );
};

export default Home;
