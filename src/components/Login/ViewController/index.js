import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../View";
import { loginSchema } from "../../../utils";
import animationData from "../../../assets/animations/letterBox.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-semantic-toasts";

export const ViewController = function ({
  t,
  transformToCapitalized,
  loginViewModel,
}) {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [processing, setProcessing] = useState(false);
  const toggleProcessing = () => {
    setProcessing((processing) => !processing);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginSubmit = async ({ email, password }) => {
    toggleProcessing();
    const result = await loginViewModel.loginWithBasicAuth(email, password);
    if (result.user) {
      console.log(result);
      navigate("/home");
    } else {
      toast({
        title: "Error",
        description: <p>{result.message}</p>,
        type: "error",
      });
    }
    toggleProcessing();
  };

  return (
    <View
      t={t}
      processing={processing}
      transformToCapitalized={transformToCapitalized}
      defaultOptions={defaultOptions}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onLoginSubmit={onLoginSubmit}
    />
  );
};
