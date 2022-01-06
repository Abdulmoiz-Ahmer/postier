import React from "react";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";

export const NavBarViewProvider = function () {
  const { i18n, t } = useTranslation();
  return (
    <ViewController
      i18n={i18n}
      t={t}
      transformToCapitalized={transformToCapitalized}
    />
  );
};
