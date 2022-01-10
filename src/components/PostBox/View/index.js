import React from "react";
import {
  Icon,
  Grid,
  Step,
  Image,
  Card,
  Button,
  Pagination,
} from "semantic-ui-react";
export const View = function ({ transformToCapitalized, t, openLetter }) {
  return (
    <Grid id="postBoxView" columns={2}>
      <Grid.Row>
        <Grid.Column
          widescreen={2}
          largeScreen={2}
          computer={16}
          id="postContent"
        >
          <Step.Group vertical size="large" floated="left" unstackable>
            <Step>
              <Icon name="mail" className="mailIcon tabIcon" />
              <Step.Content>
                <Step.Title className="postCategory">
                  {transformToCapitalized(t("inbox"))}
                </Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Icon name="send" className="sendIcon tabIcon" />
              <Step.Content>
                <Step.Title className="postCategory">
                  {transformToCapitalized(t("outbox"))}
                </Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </Grid.Column>

        <Grid.Column
          widescreen={14}
          largeScreen={14}
          computer={16}
          id="postContent1"
        >
          <Card.Group id="postList">
            <Card id="postCard">
              <Card.Content id="postCardInfo">
                <div className="postCardBox">
                  <div className="postCardBind">
                    <Image
                      id="postCardImage"
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header id="postName">Steve Sanders</Card.Header>
                  </div>
                  <p className="postPoNum">
                    PO.Box:<span className="postPo">111334</span>
                  </p>
                </div>
                <Card.Description id="postMsg">
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content id="postCardDetail">
                <div className="postCardIcon">
                  <Icon id="postFav" name="favorite" />
                  {/* <Icon name="favorite" /> */}
                  <Icon id="postDel" name="user delete" />
                  {/* <Icon name="user delete" /> */}
                </div>
                <Card.Meta id="postTime">8:30am</Card.Meta>
              </Card.Content>
            </Card>
            {/* another card */}
            <Card id="postCard">
              <Card.Content id="postCardInfo">
                <div className="postCardBox">
                  <div className="postCardBind">
                    <Image
                      id="postCardImage"
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header id="postName">Steve Sanders</Card.Header>
                  </div>
                  <p className="postPoNum">
                    PO.Box:<span className="postPo">111334</span>
                  </p>
                </div>
                <Card.Description id="postMsg">
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content id="postCardDetail">
                <div className="postCardIcon">
                  <Icon id="postFav" name="favorite" />
                  {/* <Icon name="favorite" /> */}
                  <Icon id="postDel" name="user delete" />
                  {/* <Icon name="user delete" /> */}
                </div>
                <Card.Meta id="postTime">8:30am</Card.Meta>
              </Card.Content>
            </Card>
            <Button.Group className="fixedBtn" floated="right">
              <Button className="fixedBtnBtn" size="large" onClick={openLetter}>
                <Icon id="fixedEdit" name="edit" />
              </Button>
            </Button.Group>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
