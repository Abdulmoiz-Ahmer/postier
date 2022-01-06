import React, { useState } from "react";
import { View } from "../View";

export const ViewController = function ({ color, message, visible }) {
  const [visibility, setVisibility] = useState(visible);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <View
      color={color}
      message={message}
      visibility={visibility}
      toggleVisibility={toggleVisibility}
    />
  );
};
