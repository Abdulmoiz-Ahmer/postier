import React from "react";
import Lottie from "react-lottie";
import { Grid, Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const View = function View({
  t,
  processing,
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
        <Grid.Column boxstyle={"true"} width={10} textAlign="center">
          <Form onSubmit={handleSubmit(onLoginSubmit)}>
            <Form.Field required error={errors?.email?.message ? true : false}>
              <label style={{ color: "#496394" }}>
                {transformToCapitalized(t("email"))}
              </label>
              <input
                id="inputView"
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
                id="inputView"
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
                id="btnSubmit"
                size="large"
                color="purple"
                type="submit"
                disabled={processing}
                loading={processing}
              >
                {transformToCapitalized(t("login"))}
              </Button>
            </Form.Field>
            Don't have an account yet!<Link to="/register">Create Account</Link>
          </Form>
        </Grid.Column>
        <Grid.Column width={6}>
          <Lottie options={defaultOptions} height={600} width={600} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
