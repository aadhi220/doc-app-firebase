import React from "react";
import { useGlobalContext } from "../contextApi/context";
import {
  Button,
  IconButton,
  Box,
  Tooltip,
  Avatar,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
export default function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { userSignOut, authUser } = useGlobalContext();
  return (
    <>
      <header className="sticky top-0 z-50  w-full h-[60px] flex  place-items-center px-4 py-2 shadow-md bg-white">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0 }}
        >
          <MenuIcon />
        </IconButton>

        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-xl font-medium text-gray-600">Docs</h1>

        <div className="flex flex-grow items-center mx-5 md:mx-40 px-2 sm:px-5  bg-gray-100 rounded-md focus-within:shadow-md focus-within:bg-white ">
          <button className="w-[35px] h-[35px] hover:bg-gray-200 rounded-full">
            {" "}
            <SearchIcon className="text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="search"
            className="flex-grow  w-[40px] sm:w-full px-2 my-2 outline-none bg-transparent text-base"
          />
        </div>
        <button className="hidden sm:block w-[35px] h-[35px] hover:bg-gray-200 rounded-full ml-5 md:ml-20 bottom-0">
          {" "}
          <AppsRoundedIcon />
        </button>

        {/* <button  onClick={() => userSignOut()} className="rounded-full bg-gray-500 min-w-[40px] w-[40px] h-[40px] overflow-hidden ms-2"><img className="w-[50px] " src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" alt="" /></button> */}

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                {authUser?.displayName}
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => userSignOut()}>
              <Typography textAlign="center">Sign Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
        {/* <div>
          <span>hello {authUser?.displayName}</span>{" "}
          <Button onClick={() => userSignOut()} variant="outlined">
            Sign Out
          </Button>
        </div> */}
      </header>
    </>
  );
}
