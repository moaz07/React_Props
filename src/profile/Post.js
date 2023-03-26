import React from "react";
import PropTypes from "prop-types";

export default function Cover({ num, name }) {
  return (
    <div>
      <fieldset>
        <legend>Post n {num}</legend>
        <p>This is a post shared by {name}</p>
      </fieldset>
    </div>
  );
}
Cover.defaultProps = {
  num: "-",
  name: "-",
};
Cover.propTypes = {
  num: PropTypes.number,
  name: PropTypes.string,
};
