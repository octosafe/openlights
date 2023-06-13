import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { SiteHeader } from "./components/SiteHeader";
import { Designs } from "./pages/Designs";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Shop } from "./pages/Shop";
import { DesignBeacon } from "./pages/designs/Beacon";
import { theme } from "./theme";

const Layout = () => (
  <Box key="content" width="100%">
    <SiteHeader key="header" />
    <Box style={{ overflow: "auto", marginTop: 100 }} padding="0px 32px">
      <Outlet />
    </Box>
  </Box>
);

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "designs",
          element: <Designs />,
          children: [{ path: "beacon", element: <DesignBeacon /> }],
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
      <ThemeProvider theme={theme}>
        <Box
          key="content_wrapper"
          width="100vw"
          height="100vh"
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          alignContent={"center"}
          overflow={"auto"}
        >
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
