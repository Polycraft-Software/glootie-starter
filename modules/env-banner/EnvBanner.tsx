import { Text } from "@/ui/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

export const EnvBanner = () => {
	const insets = useSafeAreaInsets();

	const isDev = process.env.NODE_ENV === "development";

	if (!isDev) {
		return null;
	}

	return (
		<YStack
			position="absolute"
			top={insets.top + 16}
			right={16}
			backgroundColor="$accentColor"
			paddingVertical="$2"
			paddingHorizontal="$3"
			alignItems="center"
			zIndex={999999}
			borderRadius="$10"
			opacity={0.5}
			shadowColor="$shadowColor"
			shadowOffset={{ width: 0, height: 2 }}
			shadowOpacity={0.25}
			shadowRadius={4}
			elevation={1}
			pointerEvents="none"
		>
			<Text variant="label" textTransform="uppercase" color="$background">
				DEV
			</Text>
		</YStack>
	);
};
