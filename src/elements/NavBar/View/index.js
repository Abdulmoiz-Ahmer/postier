import React from "react";
import { Flag, Menu } from "semantic-ui-react";
export const View = function View({
  changeLanguage,
  t,
  transformToCapitalized,
}) {
  return (
    <Menu size="huge" id="navBar">
      <Menu.Item id="appName">
        {transformToCapitalized(t("app-name"))}
      </Menu.Item>
      <Menu.Item position="right">
        <Flag
          id="languageChoice"
          name="pk"
          onClick={() => changeLanguage("en")}
        />
        <Flag
          id="languageChoice"
          name="al"
          onClick={() => changeLanguage("al")}
        />
      </Menu.Item>
    </Menu>
  );
};
