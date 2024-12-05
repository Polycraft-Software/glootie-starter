import {
	LibreBaskerville_400Regular,
	LibreBaskerville_700Bold,
	useFonts as useLibreBaskervilleFonts,
} from "@expo-google-fonts/libre-baskerville";
import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts as useNunitoSansFonts,
} from "@expo-google-fonts/nunito-sans";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";

import { EnvBanner } from "@/modules/env-banner/EnvBanner";
import { config } from "@/tamagui.config";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { TamaguiProvider, useTheme } from "tamagui";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
	const colorScheme = useColorScheme();

	const [libreBaskervilleLoaded, libreBaskervilleError] =
		useLibreBaskervilleFonts({
			LibreBaskerville_400Regular,
			LibreBaskerville_700Bold,
		});

	const [nunitoSansLoaded, nunitoSansError] = useNunitoSansFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	const fontsLoaded = libreBaskervilleLoaded && nunitoSansLoaded;
	const fontsError = libreBaskervilleError || nunitoSansError;

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded && !fontsError) {
		return null;
	}

	return (
		<TamaguiProvider config={config} defaultTheme={colorScheme ?? "light"}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<KeyboardProvider>{children}</KeyboardProvider>
			</ThemeProvider>
		</TamaguiProvider>
	);
};

const RootNavigation = () => {
	const theme = useTheme();

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				headerStyle: { backgroundColor: theme?.background?.val },
				headerTitleStyle: { fontFamily: "NunitoSans_400Regular" },
			}}
		/>
	);
};

export default function RootLayout() {
	return (
		<AppProviders>
			<SystemBars style="auto" />
			<EnvBanner />
			<RootNavigation />
		</AppProviders>
	);
}
