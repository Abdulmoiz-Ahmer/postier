import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";
import { useDispatch } from "react-redux";

export const LoginViewProvider = function () {
  const { t } = useTranslation();
  const loginModel = new Model(getAuth(), signInWithEmailAndPassword);
  const loginViewModel = new ViewModel(loginModel);
  const dispatch = useDispatch();

  return (
    <ViewController
      t={t}
      dispatch={dispatch}
      transformToCapitalized={transformToCapitalized}
      loginViewModel={loginViewModel}
    />
  );
};
