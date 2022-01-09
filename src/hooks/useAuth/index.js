import React from "react";
import { useSelector } from "react-redux";

export const useAuth = function () {
  return useSelector((state) => state.user.userInfo.uid) ? true : false;
};
