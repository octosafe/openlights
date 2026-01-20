import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#6366f1", // Modern indigo
        light: "#818cf8",
        dark: "#4f46e5",
      },
      secondary: {
        main: "#ec4899", // Modern pink
        light: "#f472b6",
        dark: "#db2777",
      },
      background: {
        default: "#fafafa",
        paper: "#ffffff",
      },
      text: {
        primary: "#1f2937",
        secondary: "#6b7280",
      },
    },
    typography: {
      fontFamily: ["Inter", "system-ui", "-apple-system", "sans-serif"].join(","),
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      button: {
        fontWeight: 500,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 500,
          },
          contained: {
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            "&:hover": {
              boxShadow: "0 4px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            "&:hover": {
              boxShadow: "0 4px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#6366f1",
        light: "#818cf8",
        dark: "#4f46e5",
      },
      secondary: {
        main: "#ec4899",
        light: "#f472b6",
        dark: "#db2777",
      },
      background: {
        default: "#111827",
        paper: "#1f2937",
      },
      text: {
        primary: "#f9fafb",
        secondary: "#d1d5db",
      },
    },
    typography: {
      fontFamily: ["Inter", "system-ui", "-apple-system", "sans-serif"].join(","),
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      button: {
        fontWeight: 500,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "8px 16px",
            fontWeight: 500,
          },
          contained: {
            boxShadow: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.6)",
            "&:hover": {
              boxShadow: "0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.6)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.6)",
            "&:hover": {
              boxShadow: "0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.6)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  })
);