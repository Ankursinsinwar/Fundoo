import { Box } from "@mui/material";
import Left from "../../components/SignUp/Left/Left";
import Right from "../../components/SignUp/Right/Right";

export default function SignUp() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "900px" },
          border: { xs: "none", md: "1px solid #ddd" },
          borderRadius: 2,
          padding: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Left />
        <Right />
      </Box>
    </Box>
  );
}
