import { Box, Stack } from "@mui/material";
import Chats from "./Chats";
import React from "react";

const GeneralApp = () => {
  return ( 
    <Stack direction="row" sx={{width: "100%"}}>
      <Chats />

      <Box sx={{height: "100%", width: "calc(100vw - 390px)",backgroundColor: "#dbeffd"}}>

      </Box>
    </Stack>
  );
};

export default GeneralApp;