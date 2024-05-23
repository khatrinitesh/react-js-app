import React from "react";
import { IconButton } from "@mui/material";
import {
  Home,
  Explore,
  Notifications,
  Message,
  AccountCircle,
} from "@mui/icons-material";

const CustomApp = () => {
  return (
    <>
      <IconButton color="primary">
        <Home />
      </IconButton>
      <IconButton color="primary">
        <Explore />
      </IconButton>
      <IconButton color="primary">
        <Notifications />
      </IconButton>
      <IconButton color="primary">
        <Message />
      </IconButton>
      <IconButton color="primary">
        <AccountCircle />
      </IconButton>
    </>
  );
};

export default CustomApp;
