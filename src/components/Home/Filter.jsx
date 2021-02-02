import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Spinner,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import getToDoList from "../../api/getToDoList";

const propTypes = {
  setToDoList: PropTypes.func,
};

// Timeout to debounce search input
let timeout;

const Filter = ({ setToDoList }) => {
  const [loading, setLoading] = useState(false);

  const getFilteredResults = ({ searchText }) => {
    setLoading(true);
    getToDoList({ searchText }).then((response) => {
      setLoading(false);
      setToDoList(response);
    });
  };

  const handleSearchChange = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => getFilteredResults({ searchText: e.target.value }),
      500
    );
  };

  return (
    <Container className="justify-content-end mt-5 mb-3">
      <Row>
        <Col xs={8} sm={8} md={8} lg={8} />
        <Col xs={4} sm={4} md={4} lg={4}>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                {loading ? (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <FontAwesomeIcon icon={faSearch} />
                )}
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

Filter.propTypes = propTypes;
export default Filter;
