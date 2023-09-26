import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./components/Routes/Protected";
import Public from "./components/Routes/Public";
import Donor from "./pages/dashboard/Donor";
import Hospital from "./pages/dashboard/Hospital";
import Organization from "./pages/dashboard/Organization";
import Consumer from "./pages/dashboard/Consumer";
import Analytics from "./pages/dashboard/Analytics";
import AdminHome from "./pages/dashboard/aminRouts/AdminHome";
import DonorList from "./pages/dashboard/aminRouts/DonorList";
import HospitalList from "./pages/dashboard/aminRouts/HospitalList";
import OrganizationList from "./pages/dashboard/aminRouts/OrganizationList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route
            path="/admin"
            element={
              <Protected>
                <AdminHome />
              </Protected>
            }
          />
          <Route
            path="/get-donor"
            element={
              <Protected>
                <DonorList />
              </Protected>
            }
          />
          <Route
            path="/get-hospital"
            element={
              <Protected>
                <HospitalList />
              </Protected>
            }
          />
          <Route
            path="/get-organization"
            element={
              <Protected>
                <OrganizationList />
              </Protected>
            }
          />

          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/analytics"
            element={
              <Protected>
                <Analytics />
              </Protected>
            }
          />
          <Route
            path="/donor"
            element={
              <Protected>
                <Donor />
              </Protected>
            }
          />
          <Route
            path="/consumer"
            element={
              <Protected>
                <Consumer />
              </Protected>
            }
          />
          <Route
            path="/hospital"
            element={
              <Protected>
                <Hospital />
              </Protected>
            }
          />
          <Route
            path="/organization"
            element={
              <Protected>
                <Organization />
              </Protected>
            }
          />

          <Route
            path="/auth/login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="/auth/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
