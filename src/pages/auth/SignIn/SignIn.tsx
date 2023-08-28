import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const theme = useTheme();
  const handleSignIn = () => {
    if (!username || !password) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 6000);
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
  };
  const handleCloseAlert = () => {
    setShowError(false);
  };

  return (
    <>
      {showError && (
        <Alert
          severity="error"
          action={<Button onClick={handleCloseAlert}>OK</Button>}
        >
          Please fill out all fields before signIn.
        </Alert>
      )}
      {showSuccess && (
        <Alert severity="success">Congrats you are successfully signedIn</Alert>
      )}
      <div
        className="mainPage"
        style={{
          height: "500px",
          width: "600px",
          backgroundColor: "rgb(245, 245, 245)",
          borderRadius: "10px",
          padding: "4px",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          boxShadow: "0 11px 21px 0 rgba(34,90,182,.12)",
        }}
      >
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Box mt={2}>
            <Typography
              variant="h5"
              component="h2"
              color={"#49515A"}
              fontWeight={600}
            >
              Welcome to our SignIn Page
            </Typography>
            <Box mt={4} width={"300px"} textAlign={"left"}>
              <Typography
                variant="h6"
                component="h2"
                color={"#49515A"}
                fontSize={16}
                fontFamily={"inherit"}
                fontWeight={500}
              >
                Username
              </Typography>
              <Box
                sx={{
                  borderRadius: "10px",
                }}
              >
                <InputBase
                  sx={{
                    border: "1px solid black",
                    borderRadius: "6px",
                    marginTop: "8px",
                    padding: "8px",
                    width: "500px",
                  }}
                  placeholder="please enter a username"
                  defaultValue="UserName"
                  value={username}
                  fullWidth
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                mt={2}
                color={"#49515A"}
                fontSize={16}
                fontFamily={"inherit"}
                fontWeight={500}
              >
                Password
              </Typography>
              <InputBase
                sx={{
                  border: "1px solid black",
                  borderRadius: "4px",
                  marginTop: "8px",
                  padding: "8px",
                  width: "500px",
                }}
                fullWidth
                type="password"
                placeholder="please enter password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mt={4} display={"flex"} justifyContent={"space-between"}>
              <Link to="/signup">SignUp</Link>

              <Button
                variant="contained"
                onClick={handleSignIn}
                sx={{
                  width: "200px",
                }}
              >
                SignIn
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SignIn;
