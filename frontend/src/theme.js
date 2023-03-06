import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        secondary: {
          // Jaune Safran
          100: "#fff0d0",
          200: "#ffe2a0",
          300: "#ffd371",
          400: "#ffc541",
          500: "#ffb612",
          600: "#cc920e",
          700: "#996d0b",
          800: "#664907",
          900: "#332404",
        },
        primary: {
          // bleu signaletique
          100: "#cccfd5",
          200: "#99a0aa",
          300: "#667080",
          400: "#334155",
          500: "#00112b",
          600: "#000e22",
          700: "#000a1a",
          800: "#000711",
          900: "#000309",
        },
        grey: {
          100: "#f7f7f7",
          200: "#efefef",
          300: "#e7e7e7",
          400: "#dfdfdf",
          500: "#d7d7d7",
          600: "#acacac",
          700: "#818181",
          800: "#565656",
          900: "#2b2b2b",
        },
        prune: {
          100: "#eccce1",
          200: "#d999c4",
          300: "#c766a6",
          400: "#b43389",
          500: "#a1006b",
          600: "#810056",
          700: "#610040",
          800: "#40002b",
          900: "#200015",
        },
        bleuPrimaire: {
          100: "#cce7f5",
          200: "#99cfeb",
          300: "#66b8e2",
          400: "#33a0d8",
          500: "#0088ce",
          600: "#006da5",
          700: "#00527c",
          800: "#003652",
          900: "#001b29",
        },
        orange: {
          100: "#f9dccd",
          200: "#f3ba9b",
          300: "#ec976a",
          400: "#e67538",
          500: "#e05206",
          600: "#b34205",
          700: "#863104",
          800: "#5a2102",
          900: "#2d1001",
        },
        vertPomme: {
          100: "#e6f2cc",
          200: "#cde599",
          300: "#b4d866",
          400: "#9bcb33",
          500: "#82be00",
          600: "#689800",
          700: "#4e7200",
          800: "#344c00",
          900: "#1a2600",
        },
        rougeAssistance: {
          100: "#f7d5d2",
          200: "#eeaaa5",
          300: "#e68078",
          400: "#dd554b",
          500: "#d52b1e",
          600: "#aa2218",
          700: "#801a12",
          800: "#55110c",
          900: "#2b0906",
        },
      }
    : {
        secondary: {
          // Jaune Safran
          100: "#332404",
          200: "#664907",
          300: "#996d0b",
          400: "#cc920e",
          500: "#ffb612",
          600: "#ffc541",
          700: "#ffd371",
          800: "#ffe2a0",
          900: "#fff0d0",
        },
        primary: {
          // bleu signaletique
          100: "#000309",
          200: "#000711",
          300: "#000a1a",
          400: "#000e22",
          500: "#00112b",
          600: "#334155",
          700: "#667080",
          800: "#99a0aa",
          900: "#cccfd5",
        },
        grey: {
          100: "#2b2b2b",
          200: "#565656",
          300: "#818181",
          400: "#acacac",
          500: "#d7d7d7",
          600: "#dfdfdf",
          700: "#e7e7e7",
          800: "#efefef",
          900: "#f7f7f7",
        },
        prune: {
          100: "#200015",
          200: "#40002b",
          300: "#610040",
          400: "#810056",
          500: "#a1006b",
          600: "#b43389",
          700: "#c766a6",
          800: "#d999c4",
          900: "#eccce1",
        },
        bleuPrimaire: {
          100: "#001b29",
          200: "#003652",
          300: "#00527c",
          400: "#006da5",
          500: "#0088ce",
          600: "#33a0d8",
          700: "#66b8e2",
          800: "#99cfeb",
          900: "#cce7f5",
        },
        orange: {
          100: "#2d1001",
          200: "#5a2102",
          300: "#863104",
          400: "#b34205",
          500: "#e05206",
          600: "#e67538",
          700: "#ec976a",
          800: "#f3ba9b",
          900: "#f9dccd",
        },
        vertPomme: {
          100: "#1a2600",
          200: "#344c00",
          300: "#4e7200",
          400: "#689800",
          500: "#82be00",
          600: "#9bcb33",
          700: "#b4d866",
          800: "#cde599",
          900: "#e6f2cc",
        },
        rougeAssistance: {
          100: "#2b0906",
          200: "#55110c",
          300: "#801a12",
          400: "#aa2218",
          500: "#d52b1e",
          600: "#dd554b",
          700: "#e68078",
          800: "#eeaaa5",
          900: "#f7d5d2",
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
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
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
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

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
