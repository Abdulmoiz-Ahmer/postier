import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Model } from "../Model";
import { ViewModel } from "../ViewModel";
import { ViewController } from "../ViewController";
import { transformToCapitalized } from "../../../utils";

export const PostBoxViewProvider = function () {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ViewController
      t={t}
      transformToCapitalized={transformToCapitalized}
      navigate={navigate}
    />
  );
};
