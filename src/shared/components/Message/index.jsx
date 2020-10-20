import React from "react";

const Message = (props) => {
  return (
    <div className="alert alert-success" style={{ textAlign: "center" }}>
      {props.message}
    </div>
  );
};

export default Message;
