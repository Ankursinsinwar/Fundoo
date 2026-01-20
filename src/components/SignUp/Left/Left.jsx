import { useState } from "react";
import { Box, TextField, Button, Typography, Link, IconButton, InputAdornment, } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom'
import { signup } from "../../../services/auth.service";


export default function Left() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    let newErrors = {};

    if (!formData.firstName.match(/^[A-Za-z]{2,}$/)) {
      newErrors.firstName = "Enter a valid first name";
    }
    if (formData.firstName ===''){
      newErrors.firstName = "Enter first name";
    }
    
    if (!formData.lastName.match(/^[A-Za-z]{2,}$/)) {
      newErrors.lastName = "Enter a valid last name";
    }
    if (formData.lastName ===''){
      newErrors.lastName = "Enter last name";
    }
    
    if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    if (formData.email === '') {
      newErrors.email = "Enter Email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password.length === 0) {
      newErrors.password = "Enter Password";
    }
    if (formData.confirmPassword.length === 0) {
      newErrors.confirmPassword = "Enter confirm assword";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setErrors({ email: err.message });
    }
  }
};

  return (
    <Box sx={{ width: "90%", mx: "auto", mt: 4 }}>
      {/* Logo */}
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

      {/* Name Fields */}
      <Box
        display="flex"
        gap={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          fullWidth
        />

        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          fullWidth
        />
      </Box>

      {/* Email */}
      <TextField
        label="Your email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />

      <Link href="#" underline="hover" fontSize={14}>
        Create a new Gmail address instead
      </Link>

      {/* Password Fields */}
      <Box
        display="flex"
        gap={2}
        mt={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
          fullWidth
        />
      </Box>

      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </Typography>

      {/* Actions */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Link href="/signin" underline="hover">
          Sign in instead
        </Link>

        <Button variant="contained" size="large" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}