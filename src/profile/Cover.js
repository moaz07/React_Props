import React from "react";

export default function Cover() {
  const covStyle = {
    position: "fixed",
    background: "#61dafb",
    height: "400px",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: "-1",
  };
  return (
    <div className="cover">
      <img style={covStyle} src="cover.jpg" alt="cover" />
    </div>
  );
}
