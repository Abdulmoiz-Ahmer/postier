import React from "react";
import { Grid, Image, Button, Checkbox, Form } from "semantic-ui-react";

export const View = function View() {
  return (
    <Grid textAlign="center" verticalAlign="middle" container>
      <Grid.Row>
        <Grid.Column width={6} textAlign="center">
          <Image src="https://media.istockphoto.com/vectors/hand-holds-letter-and-inserts-it-into-mailbox-vector-id1128685907?k=20&m=1128685907&s=612x612&w=0&h=YBLFz7Ai3zxSyewqnQSBY0XRUtqtNYnqcbiXGhSadpA=" />
        </Grid.Column>

        <Grid.Column color="orange" width={10} textAlign="center">
          <Form>
            <Form.Field>
              <label>Full Name</label>
              <input placeholder="Full Name" />
            </Form.Field>
            <Form.Input label="PostBoxNumber" placeholder="PostBoxNumber" />
            <Form.Input label="Password" placeholder="Enter Password" />
            <Form.Input
              label="Confirm Password"
              placeholder="Confirm Password"
            />
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
