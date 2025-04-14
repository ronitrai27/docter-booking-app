import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign up");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault(); //not reload webpage
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl  font-semibold">
          {state === "sign up" ? "Create Account" : "Login"}
        </p>
        <p className="">
          Please {state === "sign up" ? "Create Account" : "Login"} to Book an
          Appointment
        </p>
        {state === "sign up" && (
          <div className="w-full">
            <p>Full Name:</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email:</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password:</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-lg">
          {state === "sign up" ? "Create Account" : "Login"}
        </button>
        {state === "sign up" ? (
          <p className="">
            Already Have an Account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login Here
            </span>{" "}
          </p>
        ) : (
          <p className="">
            Create a new Account?{" "}
            <span
              onClick={() => setState("sign up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
