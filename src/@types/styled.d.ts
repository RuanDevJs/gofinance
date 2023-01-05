import Theme from "../global/styles/theme";

type theme = typeof Theme;

export declare module 'styled-components' {
  export interface DefaultTheme extends theme {};
}