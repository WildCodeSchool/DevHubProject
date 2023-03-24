import React from "react";

function Message({ message }) {
  return (
    <>
      <h2>{message.title}</h2>
      <p>{message.content}</p>
      <small>
        {message.author_id} - {message.date_sent}
      </small>
    </>
  );
}

export default Message;
