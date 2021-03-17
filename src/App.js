import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Messages";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  console.log(input);
  const [messages, setMessages] = useState([
    { username: "soonny", text: "hey guys" },
    { username: "qazi", text: "whatsupp" },
  ]);
  console.log(messages);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //run when apps components loads
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map());
    });
  }, []);

  useEffect(() => {
    // prompt("please enter your name");
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    //All the logic to send the message goes
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>hello Khan Tanveer</h1>
      <h2>welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
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
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
