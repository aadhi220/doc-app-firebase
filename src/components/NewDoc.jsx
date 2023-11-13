import React from "react";
import addbtn from "./addbtn.png";
import { Paper } from "@mui/material";
import { useGlobalContext } from "../contextApi/context";

export default function NewDoc() {
const {createHandler}= useGlobalContext();
  return (
    <>
      <Paper
        onClick={() => createHandler()}
        className="w-[150px] h-[180px] flex place-content-center place-items-center"
      >
        <img className="w-full" src={addbtn} alt="" />
      </Paper>
    </>
    
  );
}
