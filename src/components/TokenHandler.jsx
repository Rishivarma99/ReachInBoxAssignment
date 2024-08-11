import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store/Store";

function TokenHandler() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(GlobalContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const token = urlParams.get("token");

    if (token) {
      // Store the token (you can use localStorage, sessionStorage, or state management like Redux)
      console.log("token ok");
      setToken(token);
      localStorage.setItem("authToken", token);

      // Navigate to the /onebox page
      navigate("/onebox");
    } else {
      // Handle error or navigate to an error page
      console.error("Token not found");
    }
  }, [navigate]);

  return null; // or a loading spinner
}

export default TokenHandler;
