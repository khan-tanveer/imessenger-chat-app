import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Messages from "./Messages";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  // console.log(input);
  const [messages, setMessages] = useState([
    { username: "soonny", message: "hey guys" },
    { username: "qazi", message: "whatsupp" },
  ]);
  // console.log(messages);
  const [username, setUsername] = useState("");

  // console.log(setMessage());

  useEffect(() => {
    //run when apps components loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // prompt("please enter your name");
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //All the logic to send the message goes
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        // src="https://www.google.com/search?q=messenger+logo&rlz=1C1VDKB_enIN933IN934&sxsrf=ALeKk02HxyzAsdXzsYlueq6WTegxP6lmjA:1616172985534&tbm=isch&source=iu&ictx=1&fir=7biovthj0flNnM%252C0HZmDZnxo4SNDM%252C_&vet=1&usg=AI4_-kTBVY7tG-ojgA3ATWUYZjc-cfOfEg&sa=X&ved=2ahUKEwjZysrF6bzvAhXLAnIKHVbTCa8Q9QF6BAgEEAE#imgrc=7biovthj0flNnM"
        alt="messenger-logo"
      />
      <h1>hello Khan Tanveer</h1>
      <h2>welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* messenges themselves */}

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Messages key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
