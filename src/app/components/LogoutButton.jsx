"use client";
import {  signOut } from "next-auth/react";
function LoginButton(props) {
  return (
    <div>
      <button onClick={() => signOut()}>Log out</button>
    </div>
  );
}

export default LoginButton;
