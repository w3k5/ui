import { Preview } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  },
};

export default preview;
