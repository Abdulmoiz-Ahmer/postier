import React from "react";
import { View } from "../View";

export const ViewController = function ({ i18n, t, transformToCapitalized }) {
  function changeLanguage(value) {
    i18n.changeLanguage(value);
  }

  return (
    <View
      t={t}
      changeLanguage={changeLanguage}
      transformToCapitalized={transformToCapitalized}
    />
  );
};
