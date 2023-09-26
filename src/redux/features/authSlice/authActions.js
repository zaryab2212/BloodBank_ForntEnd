import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NavLink, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../../services/Api";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    // console.log(password, role);
    try {
      const { data } = await Api.post("/auth/login", {
        role,
        email,
        password,
      });
      //store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        window.location.replace("/");
        // <Navigate to="/"></Navigate>;
      }
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else return rejectWithValue(error.message);
    }
  }
);
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      address,
      password,
      website,
      phone,
      role,
      name,
      organizationName,
      hospitalName,
    },
    { rejectWithValue }
  ) => {
    // console.log(password, role);
    try {
      const { data } = await axios.post("http://localhost:8080/auth/register", {
        email,
        address,
        password,
        website,
        phone,
        role,
        name,
        organizationName,
        hospitalName,
      });
      if (data.success) {
        toast.success(data.message);
        <NavLink to="/auth/login"></NavLink>;
        window.location.replace("/auth/login");
      }
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk("auth/currentUser", async () => {
  try {
    const res = await Api.get("/auth//currentuser");
    if (res?.data) {
      return res?.data;
    }
  } catch (error) {
    console.log(error);
  }
});
