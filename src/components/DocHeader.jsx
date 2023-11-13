import React, { useState ,useEffect} from "react";
import logo from "../assets/logo.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contextApi/context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { updateDoc, doc,getDoc } from "firebase/firestore";
function DocHeader() {
  const param = useParams();
const navigate =useNavigate();
  const { HandleSave, authUser } = useGlobalContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tempTitle, setTempTitle] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // console.log("Mounted");
    const getData = async () => {
      try {
        const querySnapShot = await getDoc(
          doc(db, "UserDocData", authUser.uid, "docs", param.id)
        );
        if (querySnapShot.exists() === false) {
          navigate("/");
        }
        
        setTempTitle(querySnapShot.data().title);
      } catch {
        console.log("unautherised access");
      }
    };
    getData();
  }, []);

  
  const handlerTitleChange = async (newTitle) => {
    setTempTitle(newTitle);
    console.log("title", newTitle, param.id);

    await updateDoc(doc(db, "UserDocData", authUser.uid, "docs", param.id), {
      title: newTitle,
    });
  };

  return (
    <div className="w-full flex px-5 py-3 bg-[#f9fbfd] fixed z-50 top-0 place-content-between shadow-md h-[8rem] place-items-baseline">
      <div className="flex">
        <div className="flex place-items-center w-[38px]">
          {" "}
          <Link to={"/"}>
            {" "}
            <img className="w-[35px]" src={logo} alt="" />
          </Link>
        </div>
        <div className=" flex flex-col ">
          <div className="flex place-items-center">
            <input
              type="text"
              className="px-2 text-lg flex w-[5rem] rounded-md md:w-[8rem]"
              value={tempTitle}
              onChange={(e) => {
                handlerTitleChange(e.target.value);
              }}
            />{" "}
            <span className="hidden gap-2 md:flex">
              <StarOutlineOutlinedIcon fontSize="small" />
              <DriveFolderUploadOutlinedIcon fontSize="small" />{" "}
              <CloudDoneOutlinedIcon fontSize="small" />
            </span>
          </div>
          <div className="flex w-[5rem] overflow-hidden md:w-full ">
            <button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="px-2 py-0.5 hover:bg-gray-200 rounded-md text-sm"
            >
              Files
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={()=>createHandler()}>new Document</MenuItem> */}
              <MenuItem onClick={() => HandleSave()}>save</MenuItem>
              <MenuItem onClick={handleClose}>save as pdf</MenuItem>
            </Menu>
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
