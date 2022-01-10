import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";
import { db } from "../../../utils/connection";
import { collection, addDoc } from "firebase/firestore";

export const RegisterViewProvider = function () {
  const { t } = useTranslation();
  const registerModel = new Model(
    getAuth(),
    db,
    collection,
    createUserWithEmailAndPassword,
    addDoc
  );
  const registerViewModel = new ViewModel(registerModel);

  return (
    <ViewController
      t={t}
      transformToCapitalized={transformToCapitalized}
      registerViewModel={registerViewModel}
    />
  );
};
