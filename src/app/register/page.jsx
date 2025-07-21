"use client";

import { registerUser } from "../actions/auth/registerUser";

function Register() {
  const handleOnsubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const newData = Object.fromEntries(data.entries());

    console.log(newData); // handle registration logic here

    const result = await registerUser(newData)

  console.log(result);
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleOnsubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        <label className="block mb-2 text-sm font-medium">Username</label>
        <input
          type="text"
          name="username"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
