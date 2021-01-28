import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

const EditModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

EditModal.propTypes = propTypes;
export default EditModal;
