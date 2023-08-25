import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./style.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect } from "react";
const initialState = {
  username: "",
  password: "",
  age: "",
  gender: "",
};
console.log(initialState);
const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  console.log(formData);
  const { username, password, age, gender } = formData;
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const handleSignUp = () => {
    if (!username || !password || !age || !gender) {
      alert("Please enter All required information");
    } else {
      alert("You have succefully signed up");
    }
  };

  return (
    <>
      <div
        className="mainPage"
        style={{
          height: "500px",
          width: "400px",
          backgroundColor: "lightgray",
          borderRadius: "10px",
          padding: "4px",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Box>
          <Box mt={2}>
            <Typography variant="h5" component="h2">
              Welcome to our SignIn Page
            </Typography>
            <Box mt={2} width={"300px"} textAlign={"left"}>
              <Typography variant="h6" component="h2">
                Username
              </Typography>

              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="UserName"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <Typography variant="h6" component="h2">
                Password
              </Typography>
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <Typography variant="h6" component="h2">
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

              <Typography variant="h6" component="h2">
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
              <Button variant="contained" onClick={handleSignUp}>
                Signup
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SignIn;
