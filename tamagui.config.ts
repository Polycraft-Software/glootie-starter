import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { tokens } from "@tamagui/themes";
import { createFont, createTamagui } from "tamagui";

import * as themes from "./themes";

import { animations } from "./animations";

// Typography roles
// Display (serif)
// Headline (serif)
// Title (sans-serif)
// Body (sans-serif)
// Label (sans-serif)

const displayFont = createFont({
  family: "LibreBaskerville_700Bold",
  size: {
    large: 67,
    medium: 51,
    true: 51,
    small: 38,
  },
  weight: {
    large: "700",
    medium: "700",
    true: "700",
    small: "700",
  },
  // lineHeight: {
  //   large: 67,
  //   medium: 51,
  //   true: 51,
  //   small: 38,
  // },
  letterSpacing: {
    large: 0,
    medium: 0,
    true: 0,
    small: 0,
  },
  face: {
    700: { normal: "LibreBaskerville_700Bold" },
  },
});

const headlineFont = createFont({
  family: "LibreBaskerville_400Regular",
  size: {
    default: 28,
    true: 28,
  },
  weight: {
    default: "400",
    true: "400",
  },
  face: {
    400: { normal: "LibreBaskerville_400Regular" },
  },
});

const titleFont = createFont({
  family: "NunitoSans_700Bold",
  size: {
    default: 21,
    true: 21,
  },
  weight: {
    default: "700",
    true: "700",
  },
  face: {
    700: { normal: "NunitoSans_700Bold" },
  },
});

const bodyFont = createFont({
  family: "NunitoSans_400Regular",
  size: {
    default: 16,
    true: 16,
  },
  weight: {
    default: "400",
    true: "400",
  },
  face: {
    400: { normal: "NunitoSans_400Regular" },
    700: { normal: "NunitoSans_700Bold" },
  },
});

const labelFont = createFont({
  family: "NunitoSans_400Regular",
  size: {
    default: 12,
    true: 12,
  },
  weight: {
    default: "400",
    true: "400",
  },
  face: {
    400: { normal: "NunitoSans_400Regular" },
  },
});

export const config = createTamagui({
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    display: displayFont,
    headline: headlineFont,
    title: titleFont,
    label: labelFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});
