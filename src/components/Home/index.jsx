import React, { useState, useEffect } from "react";
import { Accordion, Spinner, Container } from "react-bootstrap";

import getToDoList from "../../api/getToDoList";
import addToDoList from "../../api/addToDoList";
import deleteToDoList from "../../api/deleteToDoList";

import Header from "../shared/Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import EditModal from "./EditModal";

const Home = () => {
  // Core state for to-do items
  const [toDoList, setToDoList] = useState([]);

  const [loading, setLoading] = useState(false);

  // Keeps track of which task in the array is selected to edit
  const [editTask, setEditTask] = useState(-1);

  // Initial fetch for todo list
  useEffect(() => {
    setLoading(true);
    getToDoList()
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          setToDoList(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Adds a to-do item to the list
  const addToDoItem = (toDoItem) => {
    addToDoList(toDoItem).then((response) => {
      setToDoList([response, ...toDoList]);
    });
  };

  // Removes a to-do item from the list for a given index
  const removeToDoItem = (index, _id) => {
    deleteToDoList({ id: _id }).then((response) => {
      const list = [...toDoList];
      list.splice(index, 1);
      setToDoList(list);
    });
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
        {loading ? (
          <ToDoList
            list={toDoList}
            removeToDoItem={removeToDoItem}
            setEditTask={setEditTask}
          />
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
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
