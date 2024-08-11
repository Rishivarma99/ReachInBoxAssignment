import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const LocalContext = ({ children }) => {
  const [messageData, setMessageData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [loginCredential, setLoginCredential] = useState(null);
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   async function fetchMyData() {
  //     const response = await fetch(
  //       "https://hiring.reachinbox.xyz/api/v1/onebox/list"
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       // console.log("printing dat");
  //       console.log(data);
  //       setMessageData(data);
  //     }
  //   }

  //   fetchMyData();
  // });

  console.log("hi");
  return (
    <>
      <GlobalContext.Provider
        value={{
          messageData,
          setMessageData,
          loginCredential,
          setLoginCredential,
          token,
          setToken,
        }}
      >
        {children}
      </GlobalContext.Provider>
      ;
    </>
  );
};

export default LocalContext;
