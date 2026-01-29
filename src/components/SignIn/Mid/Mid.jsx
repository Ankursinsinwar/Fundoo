import React from 'react';
import { Card, CardContent, Button, Typography, Box, TextField, Link, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signin } from "../../../services/auth.service";
import './Signin.css';

export default function Mid() {
  const navigate = useNavigate();

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await signin(data.email, data.password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError("email", { type: "manual", message: err.message || "Invalid credentials" });
    }
  };

  return (
    <div className="signInPage" style={{ width: '100%' }}>
      <Card className="SignInCard" variant="outlined">
        <CardContent className="signInContent">

          <Typography variant="h5" className="fundoLogo"
            sx={{
              background: "linear-gradient(to right, #00a1ff, #ff0500)",
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
              label="Email"
              fullWidth
              {...register("email", {
                required: "Enter a Gmail",
                pattern: {
                  value: /^[^\s@]+@gmail\.com$/,
                  message: "Enter a valid Gmail"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="inputField"
            />

            <TextField
              label="Enter your password"
              type="password"
              fullWidth
              sx={{ mt: 4 }}
              {...register("password", {
                required: "Enter password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              className="inputField"
            />

            <Toolbar />

            <div className="signInFooter">
              <Button className="textBtn">
                <Link href="/signup" underline="hover">
                  Create account
                </Link>
              </Button>

              <Button
                variant="contained"
                disableElevation
                className="nextBtn"
                onClick={handleSubmit(onSubmit)}
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
