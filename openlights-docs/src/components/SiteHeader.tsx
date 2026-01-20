import {
  Box,
  IconButton,
  Link,
  Typography,
  styled,
  useTheme as useMuiTheme,
} from "@mui/material";
import { ReactNode } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import githubLogo from "../assets/github-mark.svg";
import instagramLogo from "../assets/instagram_logo.svg";
import openLightsLogo from "../assets/logo.svg";
import { useTheme } from "../contexts/ThemeContext";

const ExternalLinkButton = ({
  logo,
  href,
}: {
  logo: string;
  href: string;
}) => (
  <IconButton href={href} target="_blank">
    <img src={logo} alt="" style={{ width: 24, height: 24 }} />
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

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  minWidth: '800px',
  height: '100px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(31, 41, 55, 0.95)'
    : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(12px)',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

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
  const muiTheme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderWrapper theme={muiTheme}>
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
          <img src={openLightsLogo} alt="OpenLights" style={{ width: 32, height: 32, marginRight: 8 }} />
          <Typography fontSize={24} fontWeight={600}>OpenLights</Typography>
        </Box>
        <Box key="Nav">
          <HorizontalList
            fontSize={14}
            items={pages.map((page) => (
              <Typography
                component={Link}
                href={page.href}
                fontSize={14}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: muiTheme.palette.primary.main,
                  },
                }}
              >
                {page.name}
              </Typography>
            ))}
          />
        </Box>
        <Box key="External" display="flex" flexDirection="row" alignItems="center">
          <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 1 }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <ExternalLinkButton
            href="https://www.instagram.com/openlightsart/"
            logo={instagramLogo}
          />
          <ExternalLinkButton
            href="https://github.com/octosafe/openlights"
            logo={githubLogo}
          />
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
