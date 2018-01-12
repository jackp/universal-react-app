import { configure, addDecorator, setAddon } from "@storybook/react";
import chaptersAddon, { setDefaults } from "react-storybook-addon-chapters";
import EStyleSheet from "react-native-extended-stylesheet";

import centered from "./decorator-centered";

const req = require.context("../src/components", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// Wrap all stories
addDecorator(centered);

// Initialize EStyleSheet
EStyleSheet.build(require("../src/styles/theme").default);

// https://github.com/Checkfront/react-storybook-addon-chapters
setDefaults({
  sectionOptions: {
    allowPropTablesToggling: false,
  },
});
setAddon(chaptersAddon);

configure(loadStories, module);
