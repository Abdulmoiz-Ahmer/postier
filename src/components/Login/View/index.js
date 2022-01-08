import React from "react";
import Lottie from "react-lottie";
import { Grid, Button, Form, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const View = function View({
  buttonStyle = {
    width: "100%",
    height: "auto",
  },
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
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} boxstyle={"true"} computer={10}>
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
                animated
              >
                <Button.Content visible>
                  {transformToCapitalized(t("login"))}
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-in" />
                </Button.Content>
              </Button>
            </Form.Field>
            {transformToCapitalized(t("doesn't-have-account"))}{" "}
            <Link to="/register">
              {transformToCapitalized(t("create-account"))}
            </Link>
          </Form>
        </Grid.Column>
        <Grid.Column id="contentBox1" computer={6}>
          <Lottie
            options={defaultOptions}
            height={600}
            width={600}
            style={buttonStyle}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
