
"use client"
import React from 'react';
import { signIn, } from "next-auth/react"
function LoginButton(props) {
    return (
        <div>
               <button onClick={() => signIn()}>Sign in</button>
        </div>
    );
}

export default LoginButton;