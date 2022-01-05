import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../View";
import { registerSchema } from "../../../utils";
import animationData from "../../../assets/animations/letterBox.json";

export const ViewController = function () {
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

  const onRegisterSubmit = (data) => console.log(data, data);

  return (
    <View
      defaultOptions={defaultOptions}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onRegisterSubmit={onRegisterSubmit}
    />
  );
};
