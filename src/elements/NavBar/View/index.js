import React from "react";
import { Flag, Menu, Button, Icon } from "semantic-ui-react";
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
        <span className="pipeSeparator">|</span>

        <Button animated id="logBtn">
          <Button.Content visible> Logout</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-out" />
          </Button.Content>
        </Button>
      </Menu.Item>
    </Menu>
  );
};
