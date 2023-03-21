import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        marine: {
          //* marine*//
          100: "#ccd5e3",
          200: "#99abc7",
          300: "#6681aa",
          400: "#33578e",
          500: "#00205B",
          600: "#00245b",
          700: "#001b44",
          800: "#00122e",
          900: "#000917",
        },
        safran: {
          100: "#fff1d0",
          200: "#fee3a1",
          300: "#fed471",
          400: "#fdc642",
          500: "#fdb813",
          600: "#ca930f",
          700: "#986e0b",
          800: "#654a08",
          900: "#332504",
        },
        grey: {
          100: "#f6f6f6",
          200: "#ecedee",
          300: "#e3e5e5",
          400: "#d9dcdd",
          500: "#d0d3d4",
          600: "#a6a9aa",
          700: "#7d7f7f",
          800: "#535455",
          900: "#2a2a2a",
        },

        menthe: {
          100: "#ccece2",
          200: "#99d9c6",
          300: "#66c7a9",
          400: "#33b48d",
          500: "#00a170",
          600: "#00815a",
          700: "#006143",
          800: "#00402d",
          900: "#002016",
        },
        RougeAssistance: {
          100: "#f7ccd6",
          200: "#ee99ad",
          300: "#e66684",
          400: "#dd335b",
          500: "#d50032",
          600: "#aa0028",
          700: "#80001e",
          800: "#550014",
          900: "#2b000a",
        },
        bleuPrimaire: {
          100: "#cce7f4",
          200: "#99ceea",
          300: "#66b6df",
          400: "#339dd5",
          500: "#0085ca",
          600: "#006aa2",
          700: "#005079",
          800: "#003551",
          900: "#001b28",
        },
        carbon: {
          100: "#d8d7d7",
          200: "#b1b0ae",
          300: "#8b8886",
          400: "#64615d",
          500: "#3d3935",
          600: "#312e2a",
          700: "#252220",
          800: "#181715",
          900: "#0c0b0b",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        primary: {
          //* cobalt *//
          100: "#ccd7e0",
          200: "#99afc1",
          300: "#6688a3",
          400: "#336084",
          500: "#003865",
          600: "#002d51",
          700: "#00223d",
          800: "#001628",
          900: "#000b14",
        },
      }
    : {
        marine: {
          //* marine*//
          100: "#000917",
          200: "#00122e",
          300: "#001b44",
          400: "#00245b",
          500: "#00205B",
          600: "#33578e",
          700: "#6681aa",
          800: "#99abc7",
          900: "#ccd5e3",
        },
        safran: {
          100: "#332504",
          200: "#654a08",
          300: "#986e0b",
          400: "#ca930f",
          500: "#fdb813",
          600: "#fdc642",
          700: "#fed471",
          800: "#fee3a1",
          900: "#fff1d0",
        },
        grey: {
          100: "#2a2a2a",
          200: "#535455",
          300: "#7d7f7f",
          400: "#a6a9aa",
          500: "#d0d3d4",
          600: "#d9dcdd",
          700: "#e3e5e5",
          800: "#ecedee",
          900: "#f6f6f6",
        },
        menthe: {
          100: "#002016",
          200: "#00402d",
          300: "#006143",
          400: "#00815a",
          500: "#00a170",
          600: "#33b48d",
          700: "#66c7a9",
          800: "#99d9c6",
          900: "#ccece2",
        },
        RougeAssistance: {
          100: "#2b000a",
          200: "#550014",
          300: "#80001e",
          400: "#aa0028",
          500: "#d50032",
          600: "#dd335b",
          700: "#e66684",
          800: "#ee99ad",
          900: "#f7ccd6",
        },
        bleuPrimaire: {
          100: "#001b28",
          200: "#003551",
          300: "#005079",
          400: "#006aa2",
          500: "#0085ca",
          600: "#339dd5",
          700: "#66b6df",
          800: "#99ceea",
          900: "#cce7f4",
        },
        carbon: {
          100: "#0c0b0b",
          200: "#181715",
          300: "#252220",
          400: "#312e2a",
          500: "#3d3935",
          600: "#64615d",
          700: "#8b8886",
          800: "#b1b0ae",
          900: "#d8d7d7",
        },
        black: {
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        primary: {
          //* cobalt *//
          100: "#000b14",
          200: "#001628",
          300: "#00223d",
          400: "#002d51",
          500: "#003865",
          600: "#336084",
          700: "#6688a3",
          800: "#99afc1",
          900: "#ccd7e0",
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      // eslint-disable-next-line object-shorthand
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            safran: {
              main: colors.safran[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#ffffff",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            safran: {
              main: colors.safran[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#ffffff",
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto, Arial", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
