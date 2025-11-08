import { Box, Typography, Stack } from "@mui/material";
import Image from "../components/Image";

export default function TransformFlow() {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #e9f2f5 0%, #f6f7f9 25%)",
        minHeight: "400px",
        py: { xs: 3, md: 12 },
      }}
    >
      <Box sx={{ mx: "auto", px: { xs: 2, md: 15 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 8,
            px: { xs: 3, sm: 4, md: 0 }, 
          }}
        >
          <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
            <Box
              sx={{
                height: "40px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "6px", md: "8px" },
                padding: { xs: "0 12px", md: "0 16px" },
                borderRadius: "20px",
                background:
                  "linear-gradient(180.33deg, rgba(223, 250, 238, 0.174) 25.04%, rgba(209, 222, 250, 0.1972) 99.73%)",
                border: "1px solid transparent",
                backgroundClip: "padding-box",
                position: "relative",
                width: "fit-content",
                maxWidth: { xs: "100%", md: "none" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  padding: "1px",
                  background:
                    "linear-gradient(90deg, rgba(204, 232, 240, 0.78) 0%, #DFE8FB 100%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                },
              }}
            >
              <Image
                src="/images/flow-arrow.svg"
                alt="Flow arrow"
                sx={{
                  width: { xs: "16px", sm: "20px", md: "24px" },
                  height: { xs: "16px", sm: "20px", md: "24px" },
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#4B4B4B",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                See how FreightFi transforms manual chaos into automated clarity
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 32, sm: 40, md: 48 },
                lineHeight: 1.2,
                textAlign: "center",
                color: "#0D0D0D",
                mt: 2,
              }}
            >
              Freight moves fast
              <br />
              Money doesn't
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.6,
                textAlign: "center",
                color: "#4B4B4B",
                maxWidth: "700px",
                margin: "0 auto",
                mt: 2,
              }}
            >
              Every load leaves behind a trail of rate confirmations, PODs, and
              invoices but the money behind them crawls through disconnected
              systems. Manual data entry, mismatched documents, and payment delays
              drain cash and trust from every transaction.
            </Typography>
          </Stack>
        </Box>

        <Box
          role="region"
          aria-label="Transform Flow headings"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mt: { md: 5 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 24,
                color: "#0D0D0D",
                whiteSpace: "nowrap",
              }}
            >
              Stalled Inputs
            </Typography>

            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 24,
                color: "#0D0D0D",
                whiteSpace: "nowrap",
              }}
            >
              Momentum Outputs
            </Typography>
          </Box>

          <Image
            src="/images/inputs-outputs-mobile.svg"
            alt=""
            aria-hidden="true"
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "auto",
              mx: "auto",
            }}
          />

          <Image
            src="/images/inputs-outputs-desktop.svg"
            alt=""
            aria-hidden="true"
            sx={{
              display: { xs: "none", md: "block" },
              width: "100%",
              height: "auto",
              mx: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

