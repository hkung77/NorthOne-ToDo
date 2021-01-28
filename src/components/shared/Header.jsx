import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="d-flex pv-5 mt-5 flex-row justify-content-center align-items-center">
      <FontAwesomeIcon size="2x" color="#367ae0" icon={faCheckCircle} />
      <h1 className="text-primary">To Do</h1>
    </div>
  );
};

export default Header;
