import React, { FunctionComponent } from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";

const ThemeContainer: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default ThemeContainer;
