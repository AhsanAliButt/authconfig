import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./style.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
// import { useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";

const initialState = {
  username: "",
  password: "",
  age: "",
  gender: "",
};
console.log(initialState);
const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // const theme = useTheme();
  console.log(formData);
  const { username, password, age, gender } = formData;
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const handleSignUp = () => {
    if (!username || !password || !age || !gender) {
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
          Please fill out all fields before signing up.
        </Alert>
      )}
      {showSuccess && (
        <Alert severity="success">
          Congrats you are successfully signed up
        </Alert>
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
              Welcome to our SignUp Page
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
                  value={formData.username}
                  fullWidth
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <Typography
                variant="h6"
                component="h2"
                mt={2}
                color={"#49515A"}
                fontSize={16}
                fontFamily={"inherit"}
                fontWeight={500}
                mb={1}
              >
                Age
              </Typography>
              <TextField
                id="outlined-required"
                type="date"
                fullWidth
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />

              <Typography
                variant="h6"
                component="h2"
                mt={2}
                color={"#49515A"}
                fontSize={16}
                fontFamily={"inherit"}
                fontWeight={500}
              >
                {" "}
                Gender
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={handleSignUp}
                sx={{
                  width: "200px",
                }}
              >
                Signup
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
