import { Box, Typography } from "@mui/material";
import Image from "../components/Image";

export default function FinancialSystem() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 15 },
        py: { xs: 3, md: 12 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 6 },
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <Box>
          {/* Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0,
              borderRadius: "20px",
              background:
                "linear-gradient(180.33deg, rgba(223, 250, 238, 0.16) 25.04%, rgba(209, 222, 250, 0.16) 99.73%)",
              border: "1px solid #EBEBEB",
              height: "40px",
              width: "fit-content",
            }}
          >
            <Image
              src="/images/spark.svg"
              alt="Spark icon"
              sx={{
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#4B4B4B",
                whiteSpace: "nowrap",
              }}
            >
              What makes FreightFi different
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 32, md: 48 },
              color: "#000000",
              lineHeight: 1.2,
              mt: 2,
            }}
          >
            The Complete Financial
            <br />
            System for Freight
          </Typography>
        </Box>

        {/* Right Column */}
        <Box sx={{ pl: { xs: 0, md: 20 } }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#323232",
              maxWidth: 445,
            }}
          >
            FreightFi connects every invoice, document, and transaction into one
            verified, automated flow giving your team control, accuracy, and
            cash flow clarity.
          </Typography>
        </Box>
      </Box>

      {/* Content Row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 8 },
          alignItems: "center",
          mt: { xs: 12, md: 16 },
        }}
      >
        {/* Left Column */}
        <Box>
          {/* Title */}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 20, sm: 24, md: 32 },
              color: "#0D0D0D",
            }}
          >
            All your clients, carriers, and
            <br />
            settlements perfectly in sync
          </Typography>

          {/* Divider */}
          <Box
            sx={{
              width: { xs: "100%", md: 641 },
              height: 1,
              bgcolor: "#DFE0E1",
              my: 3,
            }}
          />

          {/* Bullet Points */}
          <Box>
            {[
              "AI-assisted matching of invoices and settlements",
              "Automatic reconciliation across accounts receivable and payable",
              "Eliminate double entry between TMS, QuickBooks, and spreadsheets",
              "Shared financial ledger for ops and finance",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  mb: 2.5,
                }}
              >
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    color: "#1E1E1E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Column */}
        <Box>
          <Box
            sx={{
              width: { xs: "100%", md: 631 },
              height: { xs: "auto", md: 344 },
              borderRadius: 8,
              bgcolor: "rgba(177, 178, 178, 0.12)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              aspectRatio: { xs: "16 / 9", md: "auto" },
            }}
          >
            <Image
              src="/images/recent-load-activity.svg"
              alt="Recent Load Activity"
              sx={{
                width: { xs: "100%", md: 600 },
                height: "auto",
                borderRadius: 8,
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

