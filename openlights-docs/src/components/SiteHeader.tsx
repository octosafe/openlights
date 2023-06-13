import {
  Box,
  IconButton,
  Link,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";
import { ReactNode } from "react";
import { ReactComponent as GithubLogo } from "../assets/github-mark.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram_logo.svg";
import { ReactComponent as OpenLightsLogo } from "../assets/logo.svg";

const ExternalLinkButton = ({
  logo,
  href,
}: {
  logo: React.ElementType;
  href: string;
}) => (
  <IconButton href={href} target="_blank">
    <SvgIcon component={logo} inheritViewBox fontSize="medium" />
  </IconButton>
);

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

const HeaderContainer = styled(Box)`
  min-width: 800px;
  /* max-width: 1200px; */
  height: 100px;
  width: 100%;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  position: absolute;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 0px 4px 1px #cccccc;
`;

export const SiteHeader = () => {
  return (
    <HeaderContainer>
      <Box
        key="Logo"
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        component={Link}
        href="/"
        style={{ textDecoration: "none", color: "inherit" }}
      >
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
              href="#/designs"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              DESIGNS
            </Typography>,
            <Typography
              component={Link}
              href="#/shop"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              SHOP
            </Typography>,
            <Typography
              component={Link}
              href="#/credits"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CREDITS
            </Typography>,
            <Typography
              component={Link}
              href="#/about"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Typography>,
            <Typography
              component={Link}
              href="#/help"
              fontSize={14}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HELP
            </Typography>,
          ]}
        />
      </Box>
      <Box key="External">
        <ExternalLinkButton
          href="https://www.instagram.com/openlightsart/"
          logo={InstagramLogo}
        />
        <ExternalLinkButton
          href="https:/github.com/octosafe/openlights"
          logo={GithubLogo}
        />
      </Box>
    </HeaderContainer>
  );
};
