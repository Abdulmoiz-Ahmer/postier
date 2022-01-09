import React from "react";
import { View } from "../View";
export const ViewController = function ({
  t,
  transformToCapitalized,
  navigate,
}) {
  function openLetter() {
    navigate("/letter");
  }

  return (
    <View
      t={t}
      openLetter={openLetter}
      transformToCapitalized={transformToCapitalized}
    />
  );
};
