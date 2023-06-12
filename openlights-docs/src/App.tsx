import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { SiteHeader } from "./components/SiteHeader";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { theme } from "./theme";

const Layout = () => (
  <Box key="content" width="1200px">
    <SiteHeader key="header" />
    <Box style={{ overflow: "auto" }}>
      <Outlet />
    </Box>
  </Box>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
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
          overflow={"hidden"}
        >
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
