import { useAuth } from "@/modules/auth/useAuth";
import { Text } from "@/ui/Text";
import { Button, YStack } from "tamagui";

export default function AnotherTab() {
	const { logout } = useAuth();

	return (
		<YStack gap="$4" alignItems="center">
			<Text>Another Tab</Text>
			<Button theme="accent" onPress={logout}>
				Logout
			</Button>
		</YStack>
	);
}
