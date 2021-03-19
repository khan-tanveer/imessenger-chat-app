import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import Messages from "./Messages";
import firebase from "firebase";

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
        setMessages(snapshot.docs.map((doc) => doc.data()));
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
      <h1>hello Khan Tanveer</h1>
      <h2>welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a Message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messenges themselves */}

      {messages.map((message) => (
        <Messages username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
