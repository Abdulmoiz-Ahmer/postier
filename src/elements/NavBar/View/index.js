import React from "react";
import { Flag, Menu } from "semantic-ui-react";
export const View = function View({
  changeLanguage,
  t,
  transformToCapitalized,
}) {
  return (
    <Menu size="huge">
      <Menu.Item header style={{ color: "#642eec" }}>
        {transformToCapitalized(t("app-name"))}
      </Menu.Item>
      <Menu.Item position="right">
        <Flag name="pk" onClick={() => changeLanguage("en")} />
        <Flag name="al" onClick={() => changeLanguage("al")} />
      </Menu.Item>
    </Menu>
  );
};
