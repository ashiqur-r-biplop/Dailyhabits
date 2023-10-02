/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [errorMassage, setErrorMassage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const termsOfService = [
    "1) All your data is your own. At any time, you can ask us to delete your account and export your data.",
    "2) DailyHabits does not use any analytics software that personally identifies you. Any analytics is only to discover the proper functioning of the app.",
    "3) DailyHabits does not use your data for any marketing purposes. You will only receive emails critical to the service.",
    "4) DailyHabits is not liable for any loss of data due to unforced errors that are outside our control from the external services that we use, such as Amazon Web Services where we host our servers and database.",
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e?.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    if (password < 6) {
      setErrorMassage("Minimum six characters provide your password");
      setSuccessMessage("");
      return;
    } else if (!/^(?=.*[A-Za-z])/.test(password)) {
      setErrorMassage("At least one letter");
      setSuccessMessage("");
    } else {
      signUp(email, password)
        .then((result) => {
          const loggedUser = result.user;
          setErrorMassage("");
          setSuccessMessage("");

          navigate(from, { replace: true });
          form.reset();
        })
        .catch((err) => {
          setErrorMassage(err.message);
          setSuccessMessage("");
        });
    }
  };
  const handleEmail = (e) => {
    const emailHandle = e.target.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailHandle)) {
      setErrorMassage("Email are not valid");
      return;
    } else {
      setErrorMassage("");
      setSuccessMessage("Email validation is complete");
    }
  };
  const handlePassword = (e) => {
    const passwordHandle = e.target.value;
    // console.log(passwordHandle);
    if (passwordHandle.length < 6) {
      setErrorMassage("Minimum six characters provide your password");
      setSuccessMessage("");
      return;
    } else if (!/^(?=.*[A-Za-z])/.test(passwordHandle)) {
      setErrorMassage("At least one letter");
      setSuccessMessage("");
    } else {
      setErrorMassage("");
      setSuccessMessage("The password is hard to complete");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <h2 className="my-5 text-2xl font-semibold">
          Create your DailyHabits account
        </h2>
        <div className="md:w-[400px]">
          <form
            onSubmit={handleRegister}
            className="flex flex-col justify-start items-start w-full md:w-[400px]"
          >
            <div className="flex flex-col md:w-[400px] w-full">
              <label htmlFor="email" className="py-5">
                <span className="text-red-600">*</span> Email Address
              </label>
              <input
                className="outline-none border-2 px-3 py-1"
                type="email"
                name="email"
                onChange={handleEmail}
                placeholder="email"
              />
            </div>
            <div className="flex flex-col md:w-[400px] w-full">
              <label htmlFor="Password" className="py-5">
                <span className="text-red-600">*</span> Password
              </label>
              
              <div className="relative">
                <input
                  type={toggleIcon ? "password" : "text"}
                  className="outline-none border-2 px-3 py-1 w-full"
                  name="password"
                  placeholder="Password"
                  onChange={handlePassword}
                />
                {errorMassage && <p className="text-red-600">{errorMassage}</p>}
                {successMessage && <p className="text-green-600">{successMessage}</p>}
                <div className="absolute top-2 right-4 text-xl cursor-pointer">
                  {toggleIcon ? (
                    <FaEye onClick={() => setToggleIcon(!toggleIcon)}></FaEye>
                  ) : (
                    <FaEyeSlash
                      onClick={() => setToggleIcon(!toggleIcon)}
                    ></FaEyeSlash>
                  )}
                </div>
              </div>
            </div>
            <input
              className="border w-[80%] mx-auto my-5 bg-black text-white py-2"
              type="submit"
              value="Create account"
            />
          </form>
          <p>
            Already have an Account?
            <span className="text-[#4CA7FF] font-medium">
              <Link to="/login">Please Login</Link>
            </span>
          </p>
          <div className="mt-5">
            <p>Terms of service (it’s here so that you definitely read it):</p>
            <div>
              {terms &&
                termsOfService.map((item, i) => {
                  return (
                    <p className="py-1 text-sm" key={i}>
                      {item}
                    </p>
                  );
                })}
            </div>
            <div className="text-end">
              {!terms ? (
                <button onClick={() => setTerms(true)} className="font-medium">
                  {" "}
                  see all
                </button>
              ) : (
                <button onClick={() => setTerms(false)} className="font-medium">
                  {" "}
                  see less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
