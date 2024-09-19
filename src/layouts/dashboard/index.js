import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Divider } from "@mui/material";
import Chatbot from"../../assets/Images/chatbot.ico";
import { Nav_Buttons } from '../../data';

const DashboardLayout = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Stack direction="row">
      <Stack sx={{ width: 70 }}>
      <Box 
        p={2}
        sx={{
          backgroundColor: "#73C2FB",
          height: "100vh",
          width: 70,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
        }}
      >
        <Stack direction="column" alignItems="center" sx={{ width: 40 }} spacing={3}>
          <Box 
            sx={{
              backgroundColor: "#89CFEF",
              height: 55,
              width: 55,
              borderRadius: 1.5
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
          </Box>
          <Stack spacing={3} sx={{ width: "max-content" }} direction="column" alignItems="center">
            {Nav_Buttons.map((el) => (
              el. index ===selected?
              <Box 
                p={1}
                key={el.index}
                sx={{
                  backgroundColor: "#89CFEF",
                  borderRadius: 1.5
                }}
              >
                <IconButton sx={{ color: "#fff" }}>
                  {el.icon}
                </IconButton>
              </Box>
              : <IconButton onClick={()=> 
                  setSelected(el.index)
              } sx={{ color: "#000" }}>
              {el.icon}
            </IconButton>
            ))}
           <Divider sx={{ width: "48px"}} />
            <IconButton 
              onClick={() => setSelected(3)}
              sx={{
                color: selected === 3 ? "#fff" : "#000",
                backgroundColor: selected === 3 ? "#89CFEF" : "transparent",
                width: 55,
                height: 55,
                borderRadius: 1.5,
                p: 1
              }}
            >
              <img src={Chatbot} alt="Chatbot" style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      </Stack>
      <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
