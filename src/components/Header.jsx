import React from "react";
import { useGlobalContext } from "../contextApi/context";
import { Button } from "@mui/material";
export default function Header() {
  const { userSignOut, authUser } = useGlobalContext();
  return (
    <>
      <nav className="fixed top-0 bg-slate-200 w-full h-[70px] flex place-content-between place-items-center px-10">
        <div className="navHead text-[1.5rem]">DocApp</div>
        <div>
          <span>hello {authUser?.displayName}</span>{" "}
          <Button onClick={() => userSignOut()} variant="outlined">
            Sign Out
          </Button>
        </div>
      </nav>
    </>
  );
}
