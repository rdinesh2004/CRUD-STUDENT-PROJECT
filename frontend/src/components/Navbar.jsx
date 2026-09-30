import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: darkMode
          ? "#111827"
          : "linear-gradient(135deg, #16324f, #2f668f)",

        transition: "background 0.3s ease"
      }}
    >

      <Toolbar
        sx={{
          minHeight: "85px",
          maxWidth: "1200px",
          width: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center"
        }}
      >

        {/* LEFT SIDE - LOGO */}

        <Box
          sx={{
            flexGrow: 1,

            animation: "slideIn 0.7s ease",

            "@keyframes slideIn": {
              from: {
                opacity: 0,
                transform: "translateX(-30px)"
              },

              to: {
                opacity: 1,
                transform: "translateX(0)"
              }
            }
          }}
        >

          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            sx={{
              color: "#ffffff",
              letterSpacing: "1px",
              lineHeight: 1.2
            }}
          >
            StudentHub
          </Typography>


          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.75)",
              marginTop: "5px"
            }}
          >
            Student Management System
          </Typography>

        </Box>


        {/* RIGHT SIDE */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >

          {/* Dashboard */}

          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: "#ffffff",
              borderRadius: 2,
              paddingX: 1.5,

              transition: "all 0.25s ease",

              "&:hover": {
                backgroundColor:
                  "rgba(255,255,255,0.15)",
                transform: "translateY(-2px)"
              }
            }}
          >
            Dashboard
          </Button>


          {/* Students */}

          <Button
            color="inherit"
            component={Link}
            to="/students"
            sx={{
              color: "#ffffff",
              borderRadius: 2,
              paddingX: 1.5,

              transition: "all 0.25s ease",

              "&:hover": {
                backgroundColor:
                  "rgba(255,255,255,0.15)",
                transform: "translateY(-2px)"
              }
            }}
          >
            Students
          </Button>


          {/* Add Student */}

          <Button
            color="inherit"
            component={Link}
            to="/students/add"
            sx={{
              color: "#ffffff",
              borderRadius: 2,
              paddingX: 1.5,

              transition: "all 0.25s ease",

              "&:hover": {
                backgroundColor:
                  "rgba(255,255,255,0.15)",
                transform: "translateY(-2px)"
              }
            }}
          >
            Add Student
          </Button>


          {/* DARK MODE */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: 2,
              paddingLeft: 1,
              borderLeft:
                "1px solid rgba(255,255,255,0.25)"
            }}
          >

            <Typography
              sx={{
                fontSize: "20px",
                marginRight: 0.5
              }}
            >
              {darkMode ? "🌙" : "☀️"}
            </Typography>


            <Switch
              checked={darkMode}
              onChange={() =>
                setDarkMode(!darkMode)
              }
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#ffffff"
                },

                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#64748b"
                }
              }}
            />

          </Box>

        </Box>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;