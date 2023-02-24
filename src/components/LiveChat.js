import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMessageGenerator, randomNameGenerator } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import Message from "./Message";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = React.useState("");
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomMessageGenerator(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chat.map((m, i) => (
          <Message key={i} name={m.name} message={m.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Utkarsh Gangurde",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 border-b border-black outline-none"
          type="text"
          placeholder="Say something..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 rounded-full mx-2 bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
