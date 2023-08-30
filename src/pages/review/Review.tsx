import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function HalfRating() {
  const [userRating, setUserRating] = useState();
  // const handleRatingChange = (event, newValue) => {
  //   setUserRating(newValue);
  return (
    <Box
      width={"300px"}
      height={"300px"}
      sx={{
        backgroundColor: "lightcyan",
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Typography>how much stars you want to give ?</Typography>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={0} precision={0.5} />
      </Stack>
    </Box>
  );
}
