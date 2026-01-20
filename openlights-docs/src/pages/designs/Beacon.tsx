import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DownloadIcon from '@mui/icons-material/Download';
import { Heading } from "../../components/Heading";

const beaconImages = [
  "/images/beacon/openlights_beacon_1.jpeg",
  "/images/beacon/openlights_beacon_2.jpeg",
  "/images/beacon/openlights_beacon_3.jpeg",
];

const specifications = [
  { label: "Dimensions", value: "100mm × 100mm × 150mm" },
  { label: "Power Source", value: "5V USB" },
  { label: "LED Type", value: "WS2812B RGB" },
  { label: "Material", value: "PLA + Acrylic" },
  { label: "Difficulty", value: "Intermediate" },
  { label: "Build Time", value: "2-3 hours" },
];

const materials = [
  "PLA filament (white)",
  "3mm clear acrylic sheet",
  "WS2812B LED strip (1m)",
  "ESP32 microcontroller",
  "Power supply (5V USB)",
  "Jumper wires",
  "Soldering iron and solder",
  "Laser cutter access",
];

const buildSteps = [
  {
    title: "Prepare the Acrylic Panels",
    content: "Using the provided laser files, cut the acrylic panels. These form the main structure and light guides for the beacon."
  },
  {
    title: "Print 3D Components",
    content: "Print the base and diffuser components using white PLA. Ensure good layer adhesion for structural integrity."
  },
  {
    title: "Assemble Electronics",
    content: "Solder the LED strip to the ESP32 board. Connect power wires and test the circuit before final assembly."
  },
  {
    title: "Mount Components",
    content: "Secure the LED strip between acrylic panels. Attach the ESP32 board to the base and connect all wiring."
  },
  {
    title: "Program Device",
    content: "Flash the WLED firmware to the ESP32. Configure the LED strip settings for optimal performance."
  },
  {
    title: "Final Assembly",
    content: "Assemble all components and test the lighting patterns. Adjust positioning for best light diffusion."
  },
];

export const DesignBeacon = () => (
  <Box>
    <Heading
      title="Beacon"
      subtitle="A portable LED beacon combining laser-cut acrylic and 3D printed components for stunning light effects"
    />

    {/* Image Gallery */}
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {beaconImages.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="250"
                image={image}
                alt={`Beacon view ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Action Buttons */}
    <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
      <Button
        variant="contained"
        size="large"
        startIcon={<BuildIcon />}
        LinkComponent="a"
        href="#/designs/beacon#build-guide"
        sx={{ minWidth: 150 }}
      >
        Build Guide
      </Button>
      <Button
        variant="outlined"
        size="large"
        startIcon={<ShoppingCartIcon />}
        LinkComponent="a"
        href="#/shop"
        sx={{ minWidth: 150 }}
      >
        Buy Parts
      </Button>
      <Button
        variant="text"
        size="large"
        startIcon={<DownloadIcon />}
        sx={{ minWidth: 150 }}
      >
        Download Files
      </Button>
    </Box>

    <Grid container spacing={4}>
      {/* Specifications */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BuildIcon />
              Specifications
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={1}>
              {specifications.map((spec, index) => (
                <Grid item xs={6} key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography variant="body2" color="text.secondary">
                      {spec.label}:
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {spec.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Materials */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Required Materials
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List dense>
              {materials.map((material, index) => (
                <ListItem key={index}>
                  <ListItemText primary={material} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    {/* Build Guide */}
    <Box sx={{ mt: 4 }} id="build-guide">
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <BuildIcon />
        Build Guide
      </Typography>
      <Typography variant="body1" paragraph>
        Follow these step-by-step instructions to build your own Beacon. This project requires basic electronics knowledge and access to a 3D printer and laser cutter.
      </Typography>

      {buildSteps.map((step, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              Step {index + 1}: {step.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {step.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>

    {/* Skills Required */}
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Skills Required
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip label="3D Printing" color="primary" variant="outlined" />
        <Chip label="Laser Cutting" color="primary" variant="outlined" />
        <Chip label="Basic Soldering" color="primary" variant="outlined" />
        <Chip label="Electronics Assembly" color="primary" variant="outlined" />
      </Box>
    </Box>

    {/* Community Section */}
    <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Community Builds
      </Typography>
      <Typography variant="body1" paragraph>
        Share your Beacon builds with the community! Tag your photos with #openlights #beacon on Instagram.
      </Typography>
      <Button variant="outlined" LinkComponent="a" href="https://instagram.com/openlightsart" target="_blank">
        View Community Gallery
      </Button>
    </Box>
  </Box>
);
