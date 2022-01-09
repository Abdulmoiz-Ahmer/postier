import React from "react";
import { useTranslation } from "react-i18next";
import { transformToCapitalized } from "../../../utils";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { useDispatch } from "react-redux";

export const NavBarViewProvider = function () {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <ViewController
      i18n={i18n}
      t={t}
      dispatch={dispatch}
      transformToCapitalized={transformToCapitalized}
    />
  );
};
