import React from "react";
import Lottie from "react-lottie";
import { Grid, Card, Button } from "semantic-ui-react";

export const View = function View({
  buttonStyle = {
    width: "100%",
    height: "auto",
  },

  defaultOptions,
}) {
  return (
    <Grid id="letterBox">
      <Grid.Column mobile={16} boxstyle={"true"} computer={10}>
        <Card className="letterContent">
          <Card.Content className="letterPosition">
            <h4 className="senderInfo" floated="left">
              To:
              <span className="senderInfoName">person</span>
            </h4>
          </Card.Content>

          <Card.Description>
            this the card content.................................
          </Card.Description>
          <Card.Content className="letterBtnPosition">
            <Button className="btnSend">Send</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};
