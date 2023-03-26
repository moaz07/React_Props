import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

export default function Profile(props) {
  const nameStyle = {
    fontSize: "40px",
    fontWeight: "bold",
  };
  const proStyle = {
    fontSize: "20px",
  };
  const bioStyle = {
    fontSize: "15px",
    width: "40%",
    background: "#efefef",
    borderRadius: "10px",
    padding: "15px",
  };
  return (
    <div>
      {props.children}
      <div className="info">
        <span style={nameStyle}>{props.fullName}</span>
        <span style={proStyle}>{props.profession}</span>
        <span style={bioStyle}>{props.bio}</span>
        <button onClick={() => props.handleName(props.fullName)}>
          + Follow
        </button>
        <hr />
        <Post num="1" name={props.fullName} />
        <Post num="2" name={props.fullName} />
        <Post num="3" name={props.fullName} />
        <Post num="4" name={props.fullName} />
        <Post num="5" name={props.fullName} />
      </div>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "-",
  profession: "-",
  bio: "-",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};
