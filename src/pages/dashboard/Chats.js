import React from "react";
import {styled, alpha} from "@mui/material/styles";
import { Box, Typography, Stack, InputBase, Avatar, Badge} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";

const ChatElement = ()=> {
    return (
        <Box sx={{width: "100%",
            borderRadius: 1,
            backgroundColor: "#F2F3F4"
        }}
        p={2}
        >
        <Stack 
        direction="row" 
        spacing={8} 
        alignItems="center">
            <Stack direction="row" spacing={2}>
                <Avatar/>
                <Stack spacing={0.3}>
                    <Typography variant="subtitle2">
                        Sneha
                    </Typography>
                    <Typography variant="caption">
                        Hi! R u free?
                    </Typography>
                </Stack>
            </Stack>
            <Stack spacing={2} alignItems="center">
                <Typography sx={{fontWeight: 600}} variant= "caption">
                    10:30
                </Typography>
                <Badge color="primary" badgeContent={2}>
                </Badge>
            </Stack>
        </Stack>
        </Box>
    )
}

const Search = styled("div")({
    position: "relative",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginRight: 16,
    marginLeft: 0,
    width: "100%",
    height: "80%",
    border: "1px solid #73C2FB",
  });
  
  
const SearchIconWrapper = styled("div")({
    padding: "0 16px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const StyledInputBase = styled(InputBase)({
    color: "#1976d2",
    "& .MuiInputBase-input": {
      padding: "8px 8px 8px 0",
      paddingLeft: `calc(1em + 32px)`,
      width: "100%",
    },
  });

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "725px", 
        width: 320,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2}>
        <Typography variant="h5">
          Chats
        </Typography>
        <Stack sx={{width:"100%"}}>
            <Search>
                <SearchIconWrapper>
                    <MagnifyingGlass color="#73C2FB"></MagnifyingGlass>
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search" placeholdercolor="#1976d2"/>
            </Search>
        </Stack>
       
        <Stack direction="column">
            <ChatElement/>
        </Stack>
        </Stack>
    </Box>
  );
};

export default Chats;