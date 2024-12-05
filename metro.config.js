// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require("@tamagui/metro-plugin");
module.exports = wrapWithReanimatedMetroConfig(
  withTamagui(config, {
    components: ["tamagui"],
    config: "./tamagui.config.ts",
    outputCSS: "./tamagui-web.css",
  })
);
