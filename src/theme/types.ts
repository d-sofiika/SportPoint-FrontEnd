import { ThemeState } from './constants';

type colorsMap = {
  mainColor: string;
  mainText: string;
};

type fontsMap = {
  mainTypography: string;
};

type pxsMap = {
  x0: number;
  x1: number;
  x2: number;
  x3: number;
  x4: number;
  x5: number;
  x6: number;
  x7: number;
  x8: number;
  x9: number;
  x10: number;
  x11: number;
  x12: number;
};

type breakpointsMap = {
  mobile: number;
  tablet: number;
  desktop: number;
};

type mediaRulesMap = {
  up: (breakpoint: number, vertical?: boolean) => string;
  down: (breakpoint: number, vertical?: boolean) => string;
  between: (
    breakpointMin: number,
    breakpointMax: number,
    vertical?: boolean,
  ) => string;
};

type themeType = {
  pxs: pxsMap;
  fonts: fontsMap;
  color: colorsMap;
  breakpoints: breakpointsMap;
  mediaRules: mediaRulesMap;
};

interface ThemeContextType {
  theme: themeType;
  toggleTheme: () => void;
}

export type {
  breakpointsMap,
  colorsMap,
  fontsMap,
  mediaRulesMap,
  pxsMap,
  themeType,
  ThemeContextType,
};
