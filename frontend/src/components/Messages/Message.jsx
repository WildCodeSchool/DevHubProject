import React from "react";

function Message({ message }) {
  return (
    <li>
      <h2>{message.title}</h2>
      <p>{message.content}</p>
      <small>
        {message.author_id} - {message.date_sent}
      </small>
    </li>
  );
}

export default Message;
