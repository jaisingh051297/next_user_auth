"use client";
import { useSession } from "next-auth/react";
export default function Home() {
const {data:session} =useSession();
  return (
    <div>
      {
        session?.user ?(<h1>Welcome {session?.user?.user?.username}</h1>):(<h2>To see your info. You just need to login</h2>)
      } 
    </div>
  )
}
