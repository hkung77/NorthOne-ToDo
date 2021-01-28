import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { Container, Col, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

import CONSTANTS from "../../utils/constants";

const propTypes = {
  description: PropTypes.string,
  setDescription: PropTypes.func,
  setDueDate: PropTypes.func,
  dueDate: PropTypes.object,
  setStatus: PropTypes.func,
  status: PropTypes.string,
};

const ToDoAdvanced = ({
  description,
  setDescription,
  setDueDate,
  dueDate,
  status,
  setStatus,
}) => {
  const onDateSelect = (date) => {
    setDueDate(date);
  };

  const onStatusChange = (option) => {
    setStatus(option.target.value);
  };

  const onDescriptionChange = (value) => {
    setDescription(value.target.value);
  };

  return (
    <Container className="border-left border-right border-bottom pt-3">
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
            <Form.Control as="select" onChange={onStatusChange} value={status}>
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
                    ? new Intl.DateTimeFormat("en-US").format(dueDate)
                    : dueDate
                }
              />
            </div>
          </Form.Group>
        </Col>
      </Form.Row>
    </Container>
  );
};

ToDoAdvanced.propTypes = propTypes;
export default ToDoAdvanced;
