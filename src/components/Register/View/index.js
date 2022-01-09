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
  onRegisterSubmit,
  handleSubmit,
}) {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} boxstyle={"true"} computer={10}>
            <Form onSubmit={handleSubmit(onRegisterSubmit)}>
              <Form.Field
                required
                error={errors?.fullName?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("full-name"))}
                </label>
                <input
                  className="inputView"
                  placeholder={transformToCapitalized(t("full-name"))}
                  {...register("fullName")}
                />
                <span style={{ color: "#496394" }}>
                  {errors.fullName?.message &&
                    transformToCapitalized(t("full-name-error"))}
                </span>
              </Form.Field>
              <Form.Field
                required
                error={errors?.email?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("email"))}
                </label>
                <input
                  className="inputView"
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
                error={errors?.postBoxNumber?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("post-box-number"))}
                </label>
                <input
                  className="inputView"
                  placeholder={transformToCapitalized(t("post-box-number"))}
                  {...register("postBoxNumber")}
                />
                <span style={{ color: "#496394" }}>
                  {errors?.postBoxNumber?.message &&
                    transformToCapitalized(t("post-box-number-error"))}
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
                  className="inputView"
                  placeholder={transformToCapitalized(t("password"))}
                  {...register("password")}
                />
                <span style={{ color: "#496394" }}>
                  {errors.password?.message &&
                    transformToCapitalized(t("password-error"))}
                </span>
              </Form.Field>
              <Form.Field
                required
                error={errors?.confirmPassword?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("confirm-password"))}
                </label>
                <input
                  className="inputView"
                  placeholder={transformToCapitalized(t("confirm-password"))}
                  {...register("confirmPassword")}
                />
                <span style={{ color: "#496394" }}>
                  {errors?.confirmPassword?.message &&
                    t("confirm-password-error")}
                </span>
              </Form.Field>
              <Form.Field>
                <Button
                  id="btnSubmit"
                  size="large"
                  color="purple"
                  type="submit"
                  loading={processing}
                  disabled={processing}
                  animated
                >
                  <Button.Content visible>
                    {transformToCapitalized(t("sign-up"))}
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="signup" />
                  </Button.Content>
                </Button>
              </Form.Field>
              <span className="logMsg">
                {transformToCapitalized(t("already-have-account"))}{" "}
              </span>
              <Link id="choiceText" to="/login">
                {" "}
                {transformToCapitalized(t("login"))}
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
    </>
  );
};
