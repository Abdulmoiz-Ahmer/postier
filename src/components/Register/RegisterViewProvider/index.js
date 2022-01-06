import React from "react";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";

export const RegisterViewProvider = function () {
  const { t } = useTranslation();
  return (
    <ViewController t={t} transformToCapitalized={transformToCapitalized} />
  );
};
