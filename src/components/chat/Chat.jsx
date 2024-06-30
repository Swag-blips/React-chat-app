import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  
  const handleEmoji = (e) => {
    setText((prevState) => prevState + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" className="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quod, odit, laboriosam nostrum vitae esse sed neque
              consequatur itaque nemo recusandae. Illum ex debitis nesciunt
              velit consequuntur quibusdam, sit culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quod, odit, laboriosam nostrum vitae esse sed neque
              consequatur itaque nemo recusandae. Illum ex debitis nesciunt
              velit consequuntur quibusdam, sit culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" className="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quod, odit, laboriosam nostrum vitae esse sed neque
              consequatur itaque nemo recusandae. Illum ex debitis nesciunt
              velit consequuntur quibusdam, sit culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quod, odit, laboriosam nostrum vitae esse sed neque
              consequatur itaque nemo recusandae. Illum ex debitis nesciunt
              velit consequuntur quibusdam, sit culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://cdn.wallpapersafari.com/33/24/OigYeE.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quod, odit, laboriosam nostrum vitae esse sed neque
              consequatur itaque nemo recusandae. Illum ex debitis nesciunt
              velit consequuntur quibusdam, sit culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text || ""}
          placeholder="Type a message...."
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prevState) => !prevState)}
          />

          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
