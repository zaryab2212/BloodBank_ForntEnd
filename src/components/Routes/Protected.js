import React, { Children, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
import Api from "../../services/Api";
import { currentUser } from "../../redux/features/authSlice/authActions";

const Protected = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const { data } = await Api.get("/auth/currentuser");

      if (data?.success) {
        dispatch(currentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      //here he also deleted the token form local storage
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (!localStorage.getItem("token")) {
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};
export default Protected;
