import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../View";
import { loginSchema } from "../../../utils";
import animationData from "../../../assets/animations/letterBox.json";

export const ViewController = function ({
  t,
  transformToCapitalized,
  loginViewModel,
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginSubmit = async ({ email, password }) => {
    const result = await loginViewModel.loginWithBasicAuth(email, password);
    console.log(result, "32");
    if (result.user) {
    } else {
    }
  };

  return (
    <View
      t={t}
      transformToCapitalized={transformToCapitalized}
      defaultOptions={defaultOptions}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onLoginSubmit={onLoginSubmit}
    />
  );
};
