import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
          className="col-span-1 h-8"
          src="https://www.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="user"
        />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
    
    </div>
  );
};

export default ChatMessage;
