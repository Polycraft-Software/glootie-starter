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

// Handle ESM/CJS compatibility
config.resolver.unstable_enablePackageExports = true;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "jotai" || moduleName.startsWith("jotai/")) {
    //? Resolve to its CommonJS entry (fallback to main/index.js)
    return {
      type: "sourceFile",
      //? require.resolve will pick up the CJS entry (index.js) since "exports" is bypassed
      filePath: require.resolve(moduleName),
    };
  }

  return context.resolveRequest(context, moduleName, platform);
};

// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require("@tamagui/metro-plugin");
module.exports = wrapWithReanimatedMetroConfig(
  withTamagui(config, {
    components: ["tamagui"],
    config: "./tamagui.config.ts",
    outputCSS: "./tamagui-web.css",
  })
);
