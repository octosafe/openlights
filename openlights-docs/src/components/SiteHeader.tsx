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

const HeaderWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  z-index: 1000;
  min-width: 800px;
  height: 100px;
  box-shadow: 0px 0px 4px 1px #cccccc;
  background-color: white;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const HeaderContainer = styled(Box)`
  width: 100%;
  max-width: 1200px;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "#/about" },
  { name: "Designs", href: "#/designs" },
  { name: "Shop", href: "#/shop" },
  { name: "Credits", href: "#/credits" },
  { name: "Help", href: "#/help" },
];

export const SiteHeader = () => {
  return (
    <HeaderWrapper>
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
            items={pages.map((page) => (
              <Typography
                component={Link}
                href={page.href}
                fontSize={14}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  textTransform: "uppercase",
                }}
              >
                {page.name}
              </Typography>
            ))}
          />
        </Box>
        <Box key="External" display="flex" flexDirection="row">
          <ExternalLinkButton
            href="https://www.instagram.com/openlightsart/"
            logo={InstagramLogo}
          />
          <ExternalLinkButton
            href="https://github.com/octosafe/openlights"
            logo={GithubLogo}
          />
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
