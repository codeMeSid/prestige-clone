import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";

const FooterLayout = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: siteMetaData.GlobalLayout.footerBgColor,
        color: "white",
        py: 6,
        px: 4,
      }}
    >
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* Support Section 1 */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {siteMetaData.GlobalLayout.footerSection1.title}
          </Typography>
          <Typography variant="body2">
            {siteMetaData.GlobalLayout.footerSection1.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              mt: 1,
            }}
          >
            {siteMetaData.GlobalLayout.footerSection1.links.map((link) => {
              return (
                <Box component="a" key={link.href} href={link.href}>
                  <link.icon fontSize="large" />
                </Box>
              );
            })}
          </Box>
        </Grid2>

        {/* Brands Section 2*/}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {siteMetaData.GlobalLayout.footerSection2.title}
          </Typography>
          {/* <Typography variant="body2">
            <a
              href="mailto:gasstovecare@gmail.com"
              style={{ color: "white", textDecoration: "underline" }}
            >
              {siteMetaData.GlobalLayout.footerSection2.content1}
            </a>
          </Typography> */}
          <Typography
            component="a"
            href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
            variant="body2"
          >
            {siteMetaData.GlobalLayout.contactBannerText}
          </Typography>
        </Grid2>

        {/* Contact Section 3*/}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {siteMetaData.GlobalLayout.footerSection3.title}
          </Typography>
          <Typography variant="body2">Enter your email address</Typography>
          <TextField
            fullWidth
            placeholder="Your email for updates"
            variant="outlined"
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              "& input": { color: "black" },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#D1683D",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#B35432" },
            }}
          >
            Book your service now
          </Button>
        </Grid2>
      </Grid2>

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body2">
          {siteMetaData.GlobalLayout.footerRightsText}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterLayout;
