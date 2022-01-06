import React from "react";
import { ViewController } from "../ViewController";
export const NotificationViewProvider = function ({ color, message, visible }) {
  return <ViewController color={color} message={message} visible={visible} />;
};
