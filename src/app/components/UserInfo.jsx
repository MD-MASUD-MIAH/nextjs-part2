"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You are not logged in</p>;

  return (
    <div>
      Welcome {session.user.name}
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
