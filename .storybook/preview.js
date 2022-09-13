import "../src/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "violet",
    values: [
      {
        name: "violet",
        value: "#583d72",
      },
      {
        name: "lilac",
        value: "#9f5f80",
      },
      {
        name: "pastel-salmon",
        value: "#ffc996",
      },
    ],
  },
};
