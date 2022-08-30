import React from "react";

import GlobalStyle from "../src/components/GlobalStyle";

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
