import React from "react";
import { View } from "../View";
import { useAuth } from "../../../hooks";
import { logOutUser } from "../../../store/slices";
import { useNavigate } from "react-router-dom";

export const ViewController = function ({
  i18n,
  t,
  transformToCapitalized,
  dispatch,
}) {
  const showLoggedOut = useAuth();
  const navigate = useNavigate();
  function changeLanguage(value) {
    i18n.changeLanguage(value);
  }

  function logOut() {
    dispatch(logOutUser());
    navigate("/");
  }

  return (
    <View
      t={t}
      logOut={logOut}
      changeLanguage={changeLanguage}
      showLoggedOut={showLoggedOut}
      transformToCapitalized={transformToCapitalized}
    />
  );
};
