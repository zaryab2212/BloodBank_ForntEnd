import store from "../../redux/Store";
import {
  userLogin,
  userRegister,
} from "../../redux/features/authSlice/authActions";

export const handleLogin = (e, role, email, password) => {
  e.preventDefault();
  store.dispatch(userLogin({ role, email, password }));
  {
  }
};
export const handleRegister = (
  e,
  email,
  address,
  password,
  website,
  phone,
  role,
  name,
  organizationName,
  hospitalName
) => {
  e.preventDefault();
  store.dispatch(
    userRegister({
      email,
      address,
      password,
      website,
      phone,
      role,
      name,
      organizationName,
      hospitalName,
    })
  );
};
