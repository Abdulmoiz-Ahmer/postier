import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "../View";
import { registerSchema } from "../../../utils";
import animationData from "../../../assets/animations/letterBox.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-semantic-toasts";

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

  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const toggleProcessing = () => {
    setProcessing((processing) => !processing);
  };

  const onRegisterSubmit = async ({
    fullName,
    postBoxNumber,
    email,
    password,
  }) => {
    toggleProcessing();
    const result = await registerViewModel.registerWithBasicAuth(
      fullName,
      postBoxNumber,
      email,
      password
    );
    if (result.user) {
      toast({
        title: "Congratulations",
        description: <p>{"Your account is now registered"}</p>,
        type: "success",
      });
      navigate("/login");
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
      toggleProcessing={toggleProcessing}
      processing={processing}
      transformToCapitalized={transformToCapitalized}
      defaultOptions={defaultOptions}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onRegisterSubmit={onRegisterSubmit}
    />
  );
};
