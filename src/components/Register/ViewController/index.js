import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../View";
import { registerSchema } from "../../../utils";
import animationData from "../../../assets/animations/letterBox.json";

export const ViewController = function ({
  t,
  transformToCapitalized,
  registerViewModel,
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
    resolver: yupResolver(registerSchema),
  });

  const onRegisterSubmit = async ({
    fullName,
    postBoxNumber,
    email,
    password,
  }) => {
    const result = await registerViewModel.registerWithBasicAuth(
      fullName,
      postBoxNumber,
      email,
      password
    );
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
      onRegisterSubmit={onRegisterSubmit}
    />
  );
};
