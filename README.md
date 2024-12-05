# Glootie Starter

![Do you want to develop an app?](https://i.imgflip.com/9cpcga.jpg)

Do it. Develop an app. Any app, for any platform, and do it fast.

This is a template to build mobile and web apps using React Native (more platforms like desktop and browser extensions coming soon). It strives to be fully modular for flexibility, though it comes with a recommended development process to maximize speed and ease of development while ensuring good technical practices and sleek design, even if you don't have a design background.

## Table of Contents

- [Goals](#goals)
- [Tech](#tech)
- [Structure](#structure)
  - [Root Configuration](#root-configuration)
  - [Core Directories](#core-directories)
- [Typography](#typography)
- [Colors](#colors)
- [Animations](#animations)
- [Getting Started](#getting-started)
  - [Design](#design)
  - [Development](#development)
  - [Deployment](#deployment)

## Goals

- Modularity: easily replace or remove any part of the template
- Customizability: easily customize the look and feel of the app
- No setup needed: just install dependencies and run the app, you can focus 100% on building your product
- Looks good by default: the template comes with a pre-configured typography rythm and color palette to make it easier to build good-looking apps even without a designer
- AI integration: pre-written prompts are included to ensure consistent AI results for code generation

Disclaimer: this is still a work in progress, and some of those not goals are not yet fully met e.g. "no setup needed" and "modularity".

## Features

- React Native mobile app and SPA web support (more platforms coming soon)
- File-based routing 
- Light and Dark mode
- Easy theming of fonts and colors
- UI components 
- Pre-configured animations that work on all platforms
- Media queries for responsive design
- Global state management
- Cross-platform persisted local storage
- Authentication with Supabase (more options coming soon)
- Edge-to-edge support for Android
- Keyboard handling
- Production-ready Docker setup for web deployment
- EAS configuration for building your app, submitting it to the stores, and pushing OTA updates

## Tech

- React Native
- Expo
- Expo Router for frontend navigation and API routes
- Tamagui for styling, UI components, and animations (more options coming soon)
- Supabase for auth (more options coming soon)
- jotai for global state management
- MMKV for local storage
- Biome for linting and formatting
- react-native-edge-to-edge for edge-to-edge support (including status bar handling)
- react-native-keyboard-controller for keyboard handling

## Structure

The project follows a modular architecture designed for scalability and maintainability:

### Root Configuration
- `app.json` - Expo configuration
- `eas.json` - EAS configuration
- `tamagui.config.ts` - Tamagui theme and component configuration
- `metro.config.js` - Metro bundler configuration with Tamagui and Reanimated support
- `biome.json` - Code formatting and linting rules
- `.env.development` - Development environment variables
- `.env.production` - Production environment variables
- `tsconfig.json` - TypeScript configuration with strict mode and path aliases
- `package.json` - Dependencies and scripts
- `.cursorrules` - AI instructions to make Cursor more useful when using this project
- `Dockerfile` - Production Docker configuration for web deployment
- `server.ts` - Express server for web production build

### Core Directories

#### `/app`
The main application directory using Expo Router for file-based routing:
- `_layout.tsx` - Root layout with theme, navigation and font setup
- Other route files following the Expo Router convention

#### `/modules`
Responsability-based modules, where most of the code should live. When possible, those modules should expose interfaces that are decoupled from their implementation, making it easier to swap out their internals for something else (e.g. replace Supabase Auth with an alternative).

#### `/ui`
Shared custom UI components:
- `Button.tsx` - Button component with a disabled variant. (More variants for destructive actions coming soon)
- `Text.tsx` - Custom Text component with variants for typography rhythm. Check out the [typography section](#typography) for more information.
- `Logo.tsx` - Custom component to display the app logo.

#### `/assets`
Static assets:
- `/images` - App icons, splash screens and images
- `/fonts` - Embedded fonts (Check out [Expo's documentation on how to use local font files](https://docs.expo.dev/guides/using-custom-fonts/))

## Typography

This template comes with a pre-configured typography rythm, making it easier to build harmonious and balanced UIs even without designs. It can completely be overridden if you have your own by editing `tamagui.config.ts` and `/ui/Text.tsx`.

The typography rythm is based on the [Material 3 typography guidelines](https://m3.material.io/styles/typography/applying-type) which includes:

- Display (small, medium, large)
- Headline
- Title
- Body
- Label

You can use the same font for all of them, or you can use a more expressive typeface for Display and Headline, as already configured in this template.

To change the fonts:

1. Follow the instructions in the [Expo documentation on how to use custom fonts](https://docs.expo.dev/develop/user-interface/fonts/) to load the fonts you want (this template uses @expo-google-fonts packages to load Libre Baskerville and Nunito Sans).
2. Update the `createFont` calls in `tamagui.config.ts` to match the font family and style you want.
3. Update the font loaders in `app/_layout.tsx` to match the font family and style you want.

## Colors

This template uses Tamagui's UI components. To configure the colors of your app in a way that's compatible with those, you can use [Tamagui's theme generator](https://tamagui.dev/theme), replace `theme-builder.ts` with the generated file, and run the `generate-themes` script (e.g. `npm run generate-themes`).

## Animations

Animations are handled by Tamagui through Moti for cross-platform compatibility. You can configure animation values in `animations.ts`. Check out Tamagui's documentation on [animations](https://tamagui.dev/docs/core/animations) for more information.

## Getting started

### Development

📱 means that this step is needed for mobile development.

🌐 means that this step is needed for web development.

1. 🌐 📱 Clone the repo or select "Use this template" on Github
2. 🌐 📱 In `package.json`, replace the package name `glootie-starter` with your app's name
3. 📱 From https://expo.dev/, create an account if you don't have one already, then create a new project, then click "View project".
4. 📱 In `app.json`, replace all the `CHANGE_ME` values with your own:
    - "name" is the name of your app (you need to pick one)
    - "slug", "owner", and "projectId" are on the Overview page of your project on expo.dev (just copy them)
    - "scheme" is the URL scheme of your app, e.g. `myapp` (you need to pick one)
    - "bundleIdentifier" and "package" are unique identifiers for your app, e.g. `com.mycompany.myapp` (you need to pick one)
    - "url" is the URL of updates for your project on expo.dev, e.g. `https://u.expo.dev/CHANGE_ME_PROJECT_ID` (just copy your project ID)
5. 🌐 📱 Run `npm install` to install dependencies
6. 🌐 📱 To get Supabase auth working, replace the placeholder values in `.env.development` and `.env.production` with your own (create new projects on Supabase if you don't have them yet)
7. 📱 Make development builds for your app:
    - `eas build --profile development` to build for Android and/or physical iOS devices from EAS
    - `eas build --profile development-simulator` to build for iOS simulators from EAS
    - `npx expo run:android` or `npx expo run:ios` to build for Android and/or iOS devices locally (you'll need Android SDK and Xcode respectively to be installed)
8. 📱 If building development builds from EAS, install them on your device or simulator
9. 🌐 📱 Run `npx expo start` to start the development server

### Design

- Pick some fonts and colors for your app (I recommend using https://www.realtimecolors.com/ to quickly try out fonts and colors)
- Update the fonts of your app following the instructions in the [typography section](#typography).
- Create a full color palette for your app, taking inspiration from the colors you chose, following the instructions in the [colors section](#colors).
- Create icons and splash screens for your app following [Expo's instructions](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/).

### Deployment

#### Web

Use the Dockerfile in the root of the project to build and run the production web app on any Docker-compatible platform.

Support for other platforms like Vercel coming soon.

#### Mobile

Follow [Expo's instructions](https://docs.expo.dev/submit/ios/) to build and submit your app to the stores with EAS.
