import React from "react";
import { Grid, Card, Button, Input, Form, TextArea } from "semantic-ui-react";

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
              <Input className="senderInfoName" transparent />
            </h4>
          </Card.Content>

          <Form>
            <TextArea placeholder="Tell us more" />
          </Form>
          <Card.Content className="letterPosition letterFrom">
            <h4 className="senderInfo" floated="left">
              From:
              <Input className="senderInfoName" transparent />
            </h4>
          </Card.Content>
          <Card.Content className="letterBtnPosition">
            <Button className="btnSend">Send</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};
