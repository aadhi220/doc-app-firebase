import React from "react";
import logo from "../assets/logo.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
function DocHeader() {
  return (
    <div className="w-full flex px-5 py-3 bg-[#f9fbfd] fixed z-50 top-0 place-content-between shadow-md h-[8rem] place-items-baseline">
      <div className="flex">
        <div className="flex place-items-center w-[38px]">
          {" "}
          <Link to={"/home"}>
            {" "}
            <img className="w-[35px]" src={logo} alt="" />
          </Link>
        </div>
        <div className=" flex flex-col ">
          <div className="flex place-items-center">
            <input
              type="text"
              className="px-2 text-lg flex w-[5rem] rounded-md md:w-[8rem]"
              value="hello"
            />{" "}
            <span className="hidden gap-2 md:flex">
              <StarOutlineOutlinedIcon fontSize="small" />
              <DriveFolderUploadOutlinedIcon fontSize="small" />{" "}
              <CloudDoneOutlinedIcon fontSize="small" />
            </span>
          </div>
          <div className="flex w-[5rem] overflow-hidden md:w-full ">
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Files
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Edit
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              View
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Insert
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Format
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Tools
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Extentions
            </p>
            <p className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm">
              Tools
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 place-items-center">
        <div className="hidden gap-3 place-items-center md:flex ">
          <HistoryOutlinedIcon /> <MessageOutlinedIcon />{" "}
          <VideocamOutlinedIcon />
        </div>{" "}
        <button className="bg-[#b2d7ef] px-4 py-2 rounded-full shadow-md text-lg flex place-items-center scale-75 md:scale-100">
          <LockOutlinedIcon fontSize="small" />
          Share
        </button>{" "}
        <button className="rounded-full bg-gray-500 w-[40px] h-[40px] overflow-hidden ms-2">
          <img
            className="w-[50px] "
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default DocHeader;
