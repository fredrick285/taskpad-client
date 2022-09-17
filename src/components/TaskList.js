import React from "react";
import Task from "./Task";

function MessageList({
  messages,
  currentUser,
  onMessageDelete,
  onUpdateMessage,
}) {
  return (
    <div className="list">
      <ul>
        {messages.map((message) => (
          <Task
            key={message.id}
            message={message}
            currentUser={currentUser}
            onMessageDelete={onMessageDelete}
            onUpdateMessage={onUpdateMessage}
          />
        ))}
      </ul>
    </div>
  );
}

export default MessageList;