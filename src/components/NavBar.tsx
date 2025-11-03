import { AppBar, Toolbar, Typography, Box, Stack, Container, Link, Button } from "@mui/material";
import Image from "./Image";

export default function NavBar() {

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      component="nav"
      aria-label="main navigation"
      sx={{
        bgcolor: "#F6F7F9",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 4 } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: { xs: 0, md: 5 },
            py: 1.5,
          }}
        >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Image
            src="/images/FreightFi-logo.svg"
            alt="FreightFi Logo"
            sx={{
              width: 35,
              height: 35,
            }}
          />
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: 24,
              fontWeight: 400,
              color: "#000000",
              lineHeight: 1,
            }}
          >
            FreightFi
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Commened out until we have navbar options implemented */}
          {/* {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#000000",
                textTransform: "none",
                minWidth: "auto",
                px: 0,
                py: 0.5,
                "&:hover": {
                  bgcolor: "transparent",
                  opacity: 0.7,
                },
              }}
            >
              {item}
            </Button>
          ))} */}
        </Stack>

      <Button
        variant="outlined"
        aria-label="Menu"
        sx={{
          display: { xs: "flex", md: "none" },
          minWidth: "auto",
          width: "40px",
          height: "36px",
          borderRadius: "6px",
          border: "1px solid #4C80F5",
          bgcolor: "#E9EFFD",
          alignItems: "center",
          justifyContent: "center",
          p: 0,
          "&:hover": {
            border: "1px solid #4C80F5",
            bgcolor: "#E9EFFD",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      <Button
        component={Link}
        href="https://calendar.app.google/jiyCYTJCvfRYMbyq6"
        variant="outlined"
        sx={{
          display: { xs: "none", md: "flex" },
          height: "44px",
          width: "auto",
          minWidth: "fit-content",
          border: "1px solid #B9B9B9",
          borderRadius: "41px",
          padding: "8px 6px 8px 16px",
          fontSize: "16px",
          fontWeight: 500,
          color: "#0D0D0D",
          textTransform: "none",
          whiteSpace: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          "&:hover": {
            border: "1px solid #B9B9B9",
            opacity: 0.8,
            bgcolor: "transparent",
          },
        }}
      >
        Book a Demo
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "28px", sm: "32px" },
            height: { xs: "28px", sm: "32px" },
            borderRadius: "50%",
            bgcolor: "#4C80F5",
            flexShrink: 0,
          }}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "1px",
            }}
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="#FEFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Button>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
