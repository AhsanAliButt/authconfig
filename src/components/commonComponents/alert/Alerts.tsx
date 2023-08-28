import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const Alerts = ({ title, msg, icon }) => {
  console.log(title, msg, icon);
  return (
    <div>
      <Alert severity={icon}>
        <AlertTitle>{title}</AlertTitle>
        {msg}
      </Alert>
    </div>
  );
};

export default Alerts;
