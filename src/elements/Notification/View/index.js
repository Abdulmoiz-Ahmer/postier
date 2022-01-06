import React from "react";
import { Message } from "semantic-ui-react";

export const View = function ({
  message,
  color,
  visibility,
  toggleVisibility,
}) {
  return (
    visibility && (
      <Message
        onDismiss={() => {
          console.log("i am clicked");
        }}
        floating
        content={message}
        color={color}
        style={{ position: "absolute", right: "1rem" }}
      />
    )
  );
};
