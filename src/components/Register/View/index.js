import React from "react";
import Lottie from "react-lottie";
import { Grid, Image, Button, Checkbox, Form } from "semantic-ui-react";
export const View = function View({
  defaultOptions,
  register,
  errors,
  onRegisterSubmit,
  handleSubmit,
}) {
  return (
    <Grid
      stackable
      columns={1}
      textAlign="center"
      verticalAlign="middle"
      style={{ height: "100vh" }}
    >
      <Grid.Row>
        <Grid.Column
          boxStyle
          width={10}
          textAlign="center"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
            borderRadius: "0px 0px 365px 0px",
            background: "#29e7e7",
          }}
        >
          <Form onSubmit={handleSubmit(onRegisterSubmit)}>
            <Form.Field
              required
              error={errors?.fullName?.message ? true : false}
            >
              <label>Full Name</label>
              <input placeholder="First Name" {...register("fullName")} />
            </Form.Field>
            <>{errors.fullName?.message}</>

            <Form.Field
              required
              error={errors?.postBoxNumber?.message ? true : false}
            >
              <label>PostBoxNumber</label>
              <input
                placeholder="PostBoxNumber"
                {...register("postBoxNumber")}
              />
            </Form.Field>
            <>{errors.postBoxNumber?.message}</>

            <Form.Field
              required
              error={errors?.password?.message ? true : false}
            >
              <label>Password</label>
              <input placeholder="Password" {...register("password")} />
            </Form.Field>
            <>{errors.password?.message}</>

            <Form.Field
              required
              error={errors?.confirmPassword?.message ? true : false}
            >
              <label>Confirm Password</label>
              <input
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
            </Form.Field>
            <>{errors.confirmPassword?.message}</>

            <Form.Field required error={errors?.email?.message ? true : false}>
              <label>Email</label>
              <input placeholder="Email" {...register("email")} />
            </Form.Field>
            <>{errors?.email?.message}</>
            <Form.Field>
              <Button
                size="large"
                color="red"
                content="Red"
                type="submit"
                style={{ margin: "10px 0px" }}
              >
                Sign Up
              </Button>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column
          width={6}
          textAlign="center"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <Lottie options={defaultOptions} height={600} width={600} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
