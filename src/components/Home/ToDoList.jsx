import React from "react";
import PropTypes from "prop-types";
import { Button, ListGroup, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  list: PropTypes.array,
  removeToDoItem: PropTypes.func,
  setEditTask: PropTypes.func,
};

const ToDoList = ({ list, removeToDoItem, setEditTask }) => {
  return (
    <ListGroup className="mt-5">
      {list.map(({ title, description, dueDate, status, _id }, index) => (
        <ListGroup.Item key={index}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={8}>
              <h4>{title}</h4>
              <span>{description}</span>
            </Col>
            <Col xs={3} sm={3} md={3} lg={2}>
              {!!dueDate && (
                <span>
                  {`Due: ${new Intl.DateTimeFormat("en-US").format(
                    new Date(dueDate)
                  )}`}
                  <br />
                </span>
              )}
              <span>{status}</span>
            </Col>
            <Col
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className="d-flex justify-content-around align-items-center"
            >
              <Button variant="light" onClick={() => setEditTask(index)}>
                <FontAwesomeIcon color="#367ae0" icon={faPen} />
              </Button>
              <Button
                variant="light"
                onClick={() => removeToDoItem(index, _id)}
              >
                <FontAwesomeIcon color="#dc3545" icon={faTrashAlt} />
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

ToDoList.propTypes = propTypes;
export default ToDoList;
