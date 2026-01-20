import React, { useState } from 'react';
import './SignIn.css';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  TextField,
  Link,
  Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { signin } from "../../../services/auth.service";



export default function Mid() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    let newErrors = {};

    // Email or Phone validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    // const phoneRegex = /^[6-9]\d{9}$/;

    if (
      !emailRegex.test(formData.email)
      //  && !phoneRegex.test(formData.email)
    ) {
      newErrors.email = "Enter a valid Gmail";
    }
    if (formData.email === '') {
      newErrors.email = "Enter a Gmail";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password.length === 0) {
      newErrors.password = "Enter password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
      await signin(formData.email, formData.password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setErrors({ email: err.message });
    }
  }
};

  return (
    <div className="signInPage" style={{width:'100%'}}>
      <Card className="SignInCard" variant="outlined">
        <CardContent className="signInContent">
          <Typography variant="h5" className="fundoLogo"
          sx={{
            background:
            "linear-gradient(to right, #00a1ff, #ff0500)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
          }}>
            Fundo
          </Typography>

          <Typography variant="h5" sx={{ mt: 1 }}>
            Sign in
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, mt: 0.5 }}>
            with your Fundo Account
          </Typography>

          <Box className="formBox">
            <TextField
              // label="Email or phone"
              label="Email"
              // variant="standard"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              className="inputField"
            />

            {/* <Typography className="forgot" sx={{ mt: 1, mb: 3 }}>
              Forgot email?
            </Typography> */}
            

            <TextField
              label="Enter your password"
              type="password"
              // variant="standard"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              className="inputField"
              sx={{mt:4}}
            />

            {/* <Typography className="forgot" sx={{ mt: 1, mb: 3 }}>
              Forgot password?
            </Typography> */}

            <Toolbar />

            {/* <Typography variant="body2" className="guestMode">
              Not your computer? Use Guest mode to sign in privately. <br />
              <span className="forgot">Learn more</span>
            </Typography> */}

            <div className="signInFooter">
              <Button className="textBtn"><Link href="/signup" underline="hover">Create account</Link></Button>
              <Button
                variant="contained"
                disableElevation
                className="nextBtn"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
