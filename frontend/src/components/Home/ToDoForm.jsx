import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, InputGroup, FormControl, Button } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import ToDoAdvanced from "./ToDoAdvanced";
import CONSTANTS from "../../utils/constants";

const propTypes = {
  addToDoItem: PropTypes.func,
};

const ToDoForm = ({ addToDoItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [status, setStatus] = useState(CONSTANTS.STATUS.PENDING);

  const toggleAdvancedForm = useAccordionToggle("0");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onClick = () => {
    // Create new item
    const toDoItem = {
      title,
      description,
      status,
      dueDate,
    };

    // Add item to list
    addToDoItem(toDoItem);

    // Collapse advanced form
    const isOpen = document
      .getElementById("advancedForm")
      .classList.contains("show");
    if (isOpen) {
      toggleAdvancedForm();
    }

    // Reset input value
    setTitle("");
    setDescription("");
    setDueDate(null);
    setStatus(CONSTANTS.STATUS.PENDING);
  };

  // Resets advanced form when toggle is pressed
  const onAdvancedToggle = () => {
    setDescription("");
    setDueDate(null);
    setStatus(CONSTANTS.STATUS.PENDING);
  };

  return (
    <>
      <InputGroup className="mt-5">
        <FormControl
          placeholder="Task"
          aria-label="Task"
          aria-describedby="basic-addon2"
          onChange={onChange}
          value={title}
        />
        <InputGroup.Append>
          <Button
            onClick={onClick}
            disabled={title.length === 0}
            variant="outline-primary"
          >
            Add
          </Button>
          <Accordion.Toggle
            as={Button}
            variant="outline-primary"
            eventKey="0"
            onClick={onAdvancedToggle}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Accordion.Toggle>
        </InputGroup.Append>
      </InputGroup>
      <Accordion.Collapse id="advancedForm" eventKey="0">
        <ToDoAdvanced
          description={description}
          setDescription={setDescription}
          setDueDate={setDueDate}
          dueDate={dueDate}
          status={status}
          setStatus={setStatus}
        />
      </Accordion.Collapse>
    </>
  );
};

ToDoForm.propTypes = propTypes;
export default ToDoForm;
