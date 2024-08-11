import { SiGmail } from "react-icons/si";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../store/Store";

const LoginPage = () => {
  // navigate t a specific address
  const { loginCredential, setLoginCredential } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/auth"; // Your frontend URL
  };
  return (
    <>
      <div className="flex justify-center items-center  bg-[#171717] p-4 border-b-2 border-b-gray-600">
        <a href="/signin" className="flex gap-3 items-center">
          <SiGmail className="text-black text-2xl bg-white p-1" />
          <h1 className="font-semibold text-white uppercase text-xl">
            ReachInbox
          </h1>
        </a>
      </div>
      {/* nav bar end  */}

      {/* main sign in  */}
      <div className="w-full min-h-screen h-full p-10 bg-black">
        {/*center  */}
        <div className="w-[30%] mx-auto outline-dashed rounded-md bg-[#171717] ">
          {/* div-1 -> sign and sign in with gogole and dash  */}
          <div className="">
            <h2 className="p-5 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
              Sign Up
            </h2>
            <div className="mt-2 w-full px-5">
              <button
                className="flex justify-center text-white items-center gap-x-2 text-1xl capitalize  text-xl bg-[#171717] p-2 rounded-md w-full border border-2 border-[#36383f]  "
                onClick={handleLogin}
              >
                <img
                  className="w-6 h-6 flex "
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span className="text-white">sign up Google</span>
              </button>
              {/* <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponse1 = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponse1);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}
              ;
            </div>
            <div className="flex justify-center items-center uppercase gap-x-1 mt-6">
              <div className="h-[1px]  bg-white w-[20%]  "></div>
              <p className="text-sm text-white">or, sign in with your email</p>
              <div className="h-[1px]  w-[20%] bg-white  "></div>
            </div>
          </div>
          {/* end of div1 */}

          {/* div-2 email input and password input and submit   */}
          <div className="mt-5 p-4">
            {/* form start  */}
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#36383f] placeholder:text-white focus:ring-2 focus:ring-inset focus:outline-white  text-xl p-1 bg-[#171717]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500 text-[1.1rem]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#36383f] placeholder:text-white focus:ring-2 focus:ring-inset focus:outline-white  text-xl p-1 bg-[#171717]"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          {/* div -3  */}
          <div className="p-4">
            <p className="text-center text-sm text-gray-500">
              Dont Have An Account?
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// useGoogleLogin({
//   // onSuccess: (tokenResponse) => {
//   //   console.log(tokenResponse);
//   //   setLoginCredential(tokenResponse);
//   //   localStorage.setItem("accessToken", tokenResponse.access_token);
//   //   navigate("/google_login");
//   // },

// });

// curl --location 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https%3A%2F%2Ffrontend.com' \
// --data ''
