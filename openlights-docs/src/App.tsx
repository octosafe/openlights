import { Box, CssBaseline } from "@mui/material";
import { Outlet, RouterProvider, createHashRouter, useLocation } from "react-router-dom";
import "./App.css";
import { SiteHeader } from "./components/SiteHeader";
import { Designs } from "./pages/Designs";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { DesignBeacon } from "./pages/designs/Beacon";
import { DesignMirrorCube } from "./pages/designs/MirrorCube";
import { DesignPeaceCube } from "./pages/designs/PeaceCube";
import { DesignSilhouette } from "./pages/designs/Silhouette";
import { CustomThemeProvider } from "./contexts/ThemeContext";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box
      key="content"
      width="100%"
      alignItems="center"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <SiteHeader key="header" />
      <Box
        className={isHomePage ? 'hide-scrollbar' : ''}
        sx={{
          overflow: "auto",
          marginTop: '100px', // Fixed header height
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          minHeight: 'calc(100vh - 100px)', // Ensure content fills viewport
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "designs",
          element: <Designs />,
          children: [
            { path: "beacon", element: <DesignBeacon /> },
            { path: "mirrorcube", element: <DesignMirrorCube /> },
            { path: "peacecube", element: <DesignPeaceCube /> },
            { path: "silhouette", element: <DesignSilhouette /> },
          ],
        },
        {
          path: "shop",
          element: <Shop />,
        },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ],
  { basename: "/" }
);

function App() {
  return (
    <>
      <CssBaseline />
      <CustomThemeProvider>
        <Box
          key="content_wrapper"
          width="100vw"
          height="100vh"
          minWidth="400px"
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          alignContent={"center"}
          overflow={"auto"}
        >
          <RouterProvider router={router} />
        </Box>
      </CustomThemeProvider>
    </>
  );
}

export default App;
