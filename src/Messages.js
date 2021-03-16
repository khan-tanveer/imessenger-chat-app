import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Messages = (props) => {
  return (
    <Card className="message">
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
          {props.username}: {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Messages;
