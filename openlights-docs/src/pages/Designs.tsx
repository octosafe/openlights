import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet, useLocation } from "react-router-dom";
import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

type DesignItem = {
  image: string;
  title: string;
  description: string;
  linkBuy: string;
  linkBuild: string;
};

const DesignCard = ({ design }: { design: DesignItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={design.title}
        height="240"
        image={design.image}
      />
      <CardContent style={{ height: 140 }}>
        <Typography gutterBottom variant="h5" component="div">
          {design.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {design.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" LinkComponent={"a"} href={design.linkBuild}>
          Build
        </Button>
        <Button
          size="small"
          LinkComponent={"a"}
          href={design.linkBuy}
          target="_blank"
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

const designs = [
  {
    image: "/images/beacon/openlights_beacon_1.jpeg",
    title: "Beacon",
    description:
      "The Beacon is a small, portable device featuring a mix of Laser engraving and 3D printing",
    linkBuild: "#/designs/beacon",
    linkBuy: "#/shop/beacon",
  },
  {
    image: "/images/mirrorcube/openlights_mirrorcube_1.jpeg",
    title: "Mirror Cube",
    description:
      "The Mirror Cube is a kaliedoscopic cube that takes you back to funhouse mirrors and carnival rides",
    linkBuild: "#/designs/mirrorcube",
    linkBuy: "#/shop/mirrorcube",
  },
  {
    image: "/images/peacecube/openlights_peacecube_1.jpeg",
    title: "Peace Cube",
    description:
      "The Peace Cube is a calming presence to light up any space with gentle, diffused hues",
    linkBuild: "#/designs/peacecube",
    linkBuy: "#/shop/peacecube",
  },
  {
    image: "/images/silhouette/openlights_silhouette_1.jpeg",
    title: "Silhouette",
    description:
      "The Silhouette is a decorative laser cut wall lamp that plays with shadows and light",
    linkBuild: "#/designs/silhouette",
    linkBuy: "#/shop/silhouette",
  },
];

export const Designs = () => {
  const isDesignHome = useLocation().pathname === "/designs";
  return (
    <>
      <QuoteBox
        quote="Have no fear of perfection - you'll never reach it."
        author="Salvador Dali"
      />
      {isDesignHome ? (
        <>
          <Heading
            title="Designs"
            subtitle="Here you can find the list of designs created as part of OpenLights"
          />
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {designs.map((design, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                  <DesignCard design={design} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
