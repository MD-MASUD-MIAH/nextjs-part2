import { authOption } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";

import UserInfo from "./components/UserInfo";
import LogOutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <div className="h-screen place-content-center place-items-center">
      <h1>I am Home page </h1>
  
      {session?.user ? (
        <LogOutButton></LogOutButton>
      ) : (
        <LoginButton></LoginButton>
      )}

      <UserInfo></UserInfo>

      <br />
      {JSON.stringify(session)}
    </div>
  );
}
