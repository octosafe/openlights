import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { Heading } from "../components/Heading";
import { QuoteBox } from "../components/QuoteBox";

const DesignCard = ({
  image,
  title,
  description,
  linkBuy,
  linkBuild,
}: {
  image: string;
  title: string;
  description: string;
  linkBuy: string;
  linkBuild: string;
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" LinkComponent={"a"} href={linkBuy} target="_blank">
          Buy
        </Button>
        <Button
          size="small"
          LinkComponent={"a"}
          href={linkBuild}
        >
          Build
        </Button>
      </CardActions>
    </Card>
  );
};

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
          <Box padding={2}>
            <DesignCard
              image="/images/beacon/openlights_beacon_1.jpeg"
              title="Beacon"
              description="The Beacon is a small, portable device featuring a mix of Laser engraving and 3D printing"
              linkBuild="#/designs/beacon"
              linkBuy="#/shop/beacon"
            />
          </Box>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
