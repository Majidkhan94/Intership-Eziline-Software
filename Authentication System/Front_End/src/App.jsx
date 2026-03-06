import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Sahi import
import { Router } from "./Router/router.jsx";
import { loginSuccess } from "./authSlice"; 

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      dispatch(loginSuccess({
        user: JSON.parse(savedUser),
        token: savedToken
      }));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};