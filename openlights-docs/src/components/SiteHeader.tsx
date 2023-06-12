import { Box, Button, Link, SvgIcon, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ReactComponent as InstagramLogo } from "../assets/instagram_logo.svg";
import { ReactComponent as OpenLightsLogo } from "../assets/logo.svg";

const HorizontalList = ({
  items,
  fontSize,
}: {
  items: ReactNode[];
  fontSize?: number;
}) => (
  <Box
    display={"flex"}
    flexDirection={"row"}
    alignContent={"space-between"}
    gap={5}
    alignItems={"center"}
    height={"100%"}
  >
    {items.map((item, index) => (
      <>
        {index > 0 && (
          <Box
            key={`div_{item}`}
            width={"1px"}
            height={"10px"}
            border={"1px solid black"}
          />
        )}
        <Box key={`li_{item}`}>
          {typeof item === "string" ? (
            <Typography
              textTransform={"uppercase"}
              fontSize={fontSize ? fontSize : 12}
            >
              {item}
            </Typography>
          ) : (
            item
          )}
        </Box>
      </>
    ))}
  </Box>
);

export const SiteHeader = () => {
  return (
    <Box
      minWidth={"800px"}
      maxWidth={"1200px"}
      width={"100%"}
      padding={2}
      marginTop={4}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      alignSelf={"center"}
    >
      <Box key="Logo" display="flex" flexDirection={"row"} alignItems="center">
        <SvgIcon component={OpenLightsLogo} inheritViewBox fontSize="large" />
        <Typography fontSize={24}>OpenLights</Typography>
      </Box>
      <Box key="Nav">
        <HorizontalList
          fontSize={14}
          items={[
            <Typography
              component={Link}
              href="/"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </Typography>,
            <Typography
              component={Link}
              href="/designs"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              DESIGNS
            </Typography>,
            <Typography
              component={Link}
              href="/about"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Typography>,
            <Typography
              component={Link}
              href="/credits"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CREDITS
            </Typography>,
            <Typography
              component={Link}
              href="/people"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              PEOPLE
            </Typography>,
          ]}
        />
      </Box>
      <Box key="External">
        <Button
          LinkComponent={"a"}
          href="https://www.instagram.com/openlightsart/"
          target="_blank"
        >
          <SvgIcon component={InstagramLogo} inheritViewBox fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
};