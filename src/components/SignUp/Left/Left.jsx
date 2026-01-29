import { Box, TextField, Button, Typography, Link, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../../../services/auth.service";

export default function Left() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError("email", {
        type: "manual",
        message: err.message || "Signup failed"
      });
    }
  };

  return (
    <Box sx={{ width: "90%", mx: "auto", mt: 4 }}>
      <Typography
        variant="h3"
        fontWeight={500}
        mb={2}
        sx={{
          background: "linear-gradient(to right, #00a1ff, #ff0500, #fbff00, #00ff0c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Fundo
      </Typography>

      <Typography variant="h4" fontWeight={500} mb={2}>
        Create your Fundo Account
      </Typography>

      {/* Names */}
      <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
        <TextField
          label="First Name"
          fullWidth
          {...register("firstName", {
            required: "Enter first name",
            pattern: {
              value: /^[A-Za-z]{2,}$/,
              message: "Enter a valid first name"
            }
          })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          label="Last Name"
          fullWidth
          {...register("lastName", {
            required: "Enter last name",
            pattern: {
              value: /^[A-Za-z]{2,}$/,
              message: "Enter a valid last name"
            }
          })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Box>

      {/* Email */}
      <TextField
        label="Your email address"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "Enter Email",
          pattern: {
            value: /^[^\s@]+@gmail\.com$/,
            message: "Email must end with @gmail.com"
          }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Link underline="hover" fontSize={14}>
        Create a new Gmail address instead
      </Link>

      {/* Passwords */}
      <Box display="flex" gap={2} mt={2} flexDirection={{ xs: "column", md: "row" }}>
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          {...register("password", {
            required: "Enter Password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(p => !p)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <TextField
          label="Confirm"
          type={showPassword ? "text" : "password"}
          fullWidth
          {...register("confirmPassword", {
            required: "Enter confirm password",
            validate: value =>
              value === password || "Passwords do not match"
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </Box>

      {/* <Typography variant="caption" color="text.secondary" mt={1} display="block">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </Typography> */}

      {/* Actions */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Link href="/signin" underline="hover">
          Sign in instead
        </Link>

        <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
