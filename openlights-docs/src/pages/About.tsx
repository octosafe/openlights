import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

export const About = () => (
  <Box>
    <QuoteBox
      quote="Creativity is intelligence having fun."
      author="Albert Einstein"
    />
    <Heading
      title="About OpenLights"
      subtitle="Bringing creativity and technology together through open-source lighting design"
    />

    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            OpenLights is dedicated to democratizing access to creative lighting technology. We believe that stunning light installations shouldn't be limited to professionals with expensive equipment.
          </Typography>
          <Typography variant="body1" paragraph>
            By combining traditional craftsmanship with modern electronics, we create designs that are both beautiful and accessible. Our open-source approach means anyone can learn, build, and contribute to the community.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            What We Do
          </Typography>
          <Typography variant="body1" paragraph>
            We design and document lighting projects that combine:
          </Typography>
          <ul>
            <li><Typography variant="body1">3D printing for custom components</Typography></li>
            <li><Typography variant="body1">Laser cutting for precise acrylic work</Typography></li>
            <li><Typography variant="body1">LED electronics and microcontrollers</Typography></li>
            <li><Typography variant="body1">Creative programming and control systems</Typography></li>
          </ul>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Get Involved
          </Typography>
          <Typography variant="body1" paragraph>
            Join our community of makers and creators:
          </Typography>
          <ul>
            <li><Typography variant="body1">Build our designs</Typography></li>
            <li><Typography variant="body1">Share your modifications</Typography></li>
            <li><Typography variant="body1">Contribute new designs</Typography></li>
            <li><Typography variant="body1">Help improve documentation</Typography></li>
          </ul>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);