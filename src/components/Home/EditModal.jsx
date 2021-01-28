import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Col, Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import updateToDoList from "../../api/updateToDoList";

import "react-datepicker/dist/react-datepicker.css";

import CONSTANTS from "../../utils/constants";

const propTypes = {
  editTask: PropTypes.number,
  onHide: PropTypes.func,
  toDoList: PropTypes.array,
  setToDoList: PropTypes.func,
};

const EditModal = ({ editTask, onHide, toDoList, setToDoList }) => {
  const [title, setTitle] = useState(toDoList[editTask]?.title);
  const [description, setDescription] = useState(
    toDoList[editTask]?.description
  );
  const [status, setStatus] = useState(toDoList[editTask]?.status);
  const [dueDate, setDueDate] = useState(toDoList[editTask]?.dueDate);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const onDateSelect = (e) => {
    setDueDate(e);
  };

  const onSaveClick = () => {
    // Create updated task
    const newTask = {
      id: toDoList[editTask]._id,
      title,
      description,
      status,
      dueDate,
    };

    updateToDoList(newTask).then((response) => {
      // Update state
      const list = [...toDoList];
      list.splice(editTask, 1, response);
      setToDoList(list);
    });

    // Dismiss modal
    onHide();
  };

  return (
    <Modal show={editTask >= 0} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control as="input" onChange={onTitleChange} value={title} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="input"
            placeholder="Description..."
            onChange={onDescriptionChange}
            value={description}
          />
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                onChange={onStatusChange}
                value={status}
              >
                <option>{CONSTANTS.STATUS.PENDING}</option>
                <option>{CONSTANTS.STATUS.DONE}</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="status">
              <Form.Label>Due Date</Form.Label>
              <div>
                <Form.Control
                  className="d-flex"
                  as={DatePicker}
                  onChange={onDateSelect}
                  value={
                    dueDate
                      ? new Intl.DateTimeFormat("en-US").format(
                          new Date(dueDate)
                        )
                      : dueDate
                  }
                />
              </div>
            </Form.Group>
          </Col>
        </Form.Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          disabled={title.length === 0}
          onClick={onSaveClick}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditModal.propTypes = propTypes;
export default EditModal;
