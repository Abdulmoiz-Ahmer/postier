import React from "react";
import Lottie from "react-lottie";
import { Grid, Button, Form } from "semantic-ui-react";

export const View = function View({
  t,
  transformToCapitalized,
  defaultOptions,
  register,
  errors,
  onLoginSubmit,
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
          boxstyle={"true"}
          width={10}
          textAlign="center"
          // style={{
          //   height: "100vh",
          //   display: "flex",
          //   alignItems: "center",
          //   borderRadius: "0px 0px 365px 0px",
          // }}
        >
          <Form onSubmit={handleSubmit(onLoginSubmit)}>
            <Form.Field required error={errors?.email?.message ? true : false}>
              <label style={{ color: "#496394" }}>
                {transformToCapitalized(t("email"))}
              </label>
              <input
                placeholder={transformToCapitalized(t("email"))}
                {...register("email")}
              />
              <span style={{ color: "#496394" }}>
                {errors?.email?.message &&
                  transformToCapitalized(t("email-error"))}
              </span>
            </Form.Field>

            <Form.Field
              required
              error={errors?.password?.message ? true : false}
            >
              <label style={{ color: "#496394" }}>
                {transformToCapitalized(t("password"))}
              </label>
              <input
                type="password"
                placeholder={transformToCapitalized(t("password"))}
                {...register("password")}
              />
              <span style={{ color: "#496394" }}>
                {errors.password?.message &&
                  transformToCapitalized(t("password-error"))}
              </span>
            </Form.Field>

            <Form.Field>
              <Button
                size="large"
                color="purple"
                type="submit"
                style={{ margin: "10px 0px" }}
              >
                {transformToCapitalized(t("login"))}
              </Button>
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column
          width={6}
          // style={{ height: "100vh", overflow: "hidden" }}
        >
          <Lottie options={defaultOptions} height={600} width={600} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
