import React from "react";
import { Icon, Grid, Step, Image, Card, Button } from "semantic-ui-react";
export const View = function View() {
  return (
    <Grid id="postBoxView" columns={2}>
      <Grid.Row>
        <Grid.Column computer={2} id="postContent">
          <Step.Group vertical size="large" floated="left">
            <Step>
              <Icon name="mail" className="mailIcon tabIcon" />
              <Step.Content>
                <Step.Title className="postCategory">Inbox</Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Icon name="send" className="sendIcon tabIcon" />
              <Step.Content>
                <Step.Title className="postCategory">Outbox</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </Grid.Column>

        <Grid.Column computer={14} id="postContent1">
          <Card.Group id="postList">
            <Card id="postCard">
              <Card.Content id="postCardInfo">
                <div className="postCardBind">
                  <Image
                    id="postCardImage"
                    floated="left"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                  <Card.Header id="postName">Steve Sanders</Card.Header>
                </div>
                <Card.Description id="postMsg">
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content id="postCardDetail">
                <div className="postCardIcon">
                  <Icon id="postFav" name="favorite" />
                  <Icon id="postCopy" name="copy" />
                  <Icon id="postDel" name="user delete" />
                </div>
                <Card.Meta id="postTime">8:30am</Card.Meta>
              </Card.Content>
            </Card>
            {/* another card */}
            <Card id="postCard">
              <Card.Content id="postCardInfo">
                <div className="postCardBind">
                  <Image
                    id="postCardImage"
                    floated="left"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                  <Card.Header id="postName">Steve Sanders</Card.Header>
                </div>
                <Card.Description id="postMsg">
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content id="postCardDetail">
                <div className="postCardIcon">
                  <Icon id="postFav" name="favorite" />
                  <Icon id="postCopy" name="copy" />
                  <Icon id="postDel" name="user delete" />
                </div>
                <Card.Meta id="postTime">8:30am</Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
