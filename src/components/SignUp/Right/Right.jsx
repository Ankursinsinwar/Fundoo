import { Box, Typography } from "@mui/material";
import signupImg from '../../../assets/signup.svg';

export default function Right() {
    return (
        <Box
            sx={{
                display:{ xs: "none", md: "flex" },
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 300
            }}
        >
            <img
                src={signupImg}
                alt="Google Account"
                width="220"
            />
            <Typography variant="h6" mt={2}>
                One account. All of Fundo working for you.
            </Typography>
        </Box>
    );

}
