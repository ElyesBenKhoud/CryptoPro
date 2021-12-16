import { Box, Button, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";

const Signup = ({ handleClose = { handleClose } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const { setalert } = CryptoState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setalert({
        open: true,
        message: " passwords does not match",
        type: "error",
      });
      return;
    }
    //alert success
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setalert({
        open: true,
        message: `Sign up successful , welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();
      //error alert when it does not match
    } catch (error) {
      setalert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };
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
      />
      <TextField
        variant="outlined"
        type="password"
        label="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="confirm your password"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
