import React from "react";

export default function Photo() {
  const picStyle = {
    width: "200px",
    borderRadius: "50%",
    border: "3px solid white",
    textAlign: "center",
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div className="pic">
      <img
        style={picStyle}
        src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
        alt="avatar"
      />
    </div>
  );
}
