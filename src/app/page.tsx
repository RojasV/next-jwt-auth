'use client'

import { useEffect } from "react";
import { useAppContext } from "@/context";

export default function Home() {
  const { setIsLoggedIn, user, setUser, isLoggedIn } = useAppContext()

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch("http://localhost:8000/api/user", {
            credentials: "include"
          });

          const handledResponse = await response.json()
          const { name } = handledResponse
          setIsLoggedIn('true')
          setUser(name)

        } catch (error) {
          console.log(error)
        }
      }
    )()
  },[])
  return (
    <>
      Welcome, u're logged in {user}!
    </>
  )
}


