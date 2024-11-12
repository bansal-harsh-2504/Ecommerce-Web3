import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl, loggedIn, setLoggedIn } =
    useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        backendUrl +
          `/api/user/${currentState === "Sign Up" ? "register" : "login"}`,
        { name, email, password }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        resetFields();
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setLoggedIn(true);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("Error in Login.jsx : ", error.message);
    }
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
    resetFields();
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "Login" ? (
          <p className="cursor-pointer">Forgot your password?</p>
        ) : (
          <p>Already have an account?</p>
        )}
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => {
              resetFields();
              setCurrentState("Sign Up");
            }}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => {
              resetFields();
              setCurrentState("Login");
            }}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
