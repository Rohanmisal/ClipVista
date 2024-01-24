import React from "react";
import ChatMessage from "./ChatMessage.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice.js";
import { generateRandomName, makeRandomMessage } from "../utils/helper.js";

const Livechat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full  h-[514px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default Livechat;
