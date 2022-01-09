import React from "react";
import Lottie from "react-lottie";
import { Grid, Card, Icon } from "semantic-ui-react";

export const View = function View({
  buttonStyle = {
    width: "100%",
    height: "auto",
  },

  defaultOptions,
}) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} boxstyle={"true"} computer={10}>
          <Card>
            <Card.Content header="About Amy" />
            {/* <Card.Content description={description} /> */}
            <Card.Content extra>
              <Icon name="user" />4 Friends
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column id="contentBox1" computer={6}>
          {/* <Lottie
            options={defaultOptions}
            height={600}
            width={600}
            style={buttonStyle}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
