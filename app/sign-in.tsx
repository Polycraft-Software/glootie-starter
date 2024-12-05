import { Auth } from "@/modules/auth/components/Auth";
import { useAuth } from "@/modules/auth/useAuth";
import { Logo } from "@/ui/Logo";
import { Redirect } from "expo-router";
import { Card, View, YStack, useMedia } from "tamagui";

export default function SignIn() {
	const { sessionUser } = useAuth();
	const media = useMedia();

	if (sessionUser) {
		return <Redirect href="/(authenticated)" />;
	}

	return (
		<YStack
			flex={1}
			backgroundColor="$background"
			justifyContent="center"
			alignItems="center"
		>
			<View
				position="relative"
				top={0}
				width="100%"
				justifyContent="center"
				alignItems="center"
				paddingVertical="$4"
			>
				<Logo />
			</View>
			{media.gtXs ? (
				<Card elevate bordered width={500} padding="$4">
					<Auth />
				</Card>
			) : (
				<Auth />
			)}
		</YStack>
	);
}
