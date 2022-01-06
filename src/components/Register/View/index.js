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
  onRegisterSubmit,
  handleSubmit,
}) {
  return (
    <>
      <Grid
        stackable
        columns={1}
        textAlign="center"
        verticalAlign="middle"
        style={{ height: "100vh" }}
      >
        <Grid.Row>
          <Grid.Column boxstyle={"true"} width={10} textAlign="center">
            <Form onSubmit={handleSubmit(onRegisterSubmit)}>
              <Form.Field
                required
                error={errors?.fullName?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("full-name"))}
                </label>
                <input
                  id="inputView"
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
                error={errors?.postBoxNumber?.message ? true : false}
              >
                <label style={{ color: "#496394" }}>
                  {transformToCapitalized(t("post-box-number"))}
                </label>
                <input
                  id="inputView"
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
                  id="inputView"
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
                  id="inputView"
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
                >
                  {transformToCapitalized(t("sign-up"))}
                </Button>
              </Form.Field>
              Already have an account!
              <Link to="/login">Sign In</Link>
            </Form>
          </Grid.Column>
          <Grid.Column width={6}>
            <Lottie options={defaultOptions} height={600} width={600} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
