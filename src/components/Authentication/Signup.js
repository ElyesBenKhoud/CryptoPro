import { Box, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Signup = ({ handleClose = { handleClose } }) => {
  const [email, setEmail] = useState("");
  const [password, setEmailPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />{" "}
    </Box>
  );
};

export default Signup;
