import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Messages";

function App() {
  const [input, setInput] = useState("");
  console.log(input);
  const [messages, setMessages] = useState(["hello", "Khan", "Tanveer"]);
  console.log(messages);
  const [username, setUsername] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    //all the logic to send the message goes
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>hello Khan Tanveer</h1>
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
            Send Message{" "}
          </Button>
        </FormControl>
      </form>

      {/* messenges themselves */}

      {messages.map((message) => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
