import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";

export const LoginViewProvider = function () {
  const { t } = useTranslation();
  const loginModel = new Model(getAuth(), signInWithEmailAndPassword);
  const loginViewModel = new ViewModel(loginModel);
  return (
    <ViewController
      t={t}
      transformToCapitalized={transformToCapitalized}
      loginViewModel={loginViewModel}
    />
  );
};
