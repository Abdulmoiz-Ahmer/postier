import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "../elements";
import { Login } from "../pages";
import { Register } from "../pages";
import { PostBox } from "../pages";
import { Letter } from "../pages";
import { ErrorPage } from "../pages";

export const AppRoutes = function () {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <Auth>
            <PostBox />
          </Auth>
        }
      />
      <Route
        path="/letter"
        element={
          <Auth>
            <Letter />
          </Auth>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
