import { Text } from "@/ui/Text";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import {
	AnimatePresence,
	Button,
	Input,
	ScrollView,
	Stack,
	YStack,
	styled,
} from "tamagui";

const CustomScrollView = styled(ScrollView, {
	flex: 1,
	backgroundColor: "$background",
	paddingTop: "$4",
});

export default function Index() {
	const [isDisplayed, setIsDisplayed] = useState(false);
	return (
		// @ts-ignore - type mismatch
		<KeyboardAwareScrollView ScrollViewComponent={CustomScrollView}>
			<YStack
				justifyContent="center"
				alignItems="flex-start"
				gap="$4"
				marginHorizontal="auto"
				maxWidth="90%"
			>
				<Text variant="display" size="$medium">
					This is a medium display
				</Text>
				<Text variant="display" size="$small">
					This is a small display
				</Text>
				<Text
					variant="headline"
					size="$true"
					enterStyle={{ opacity: 0 }}
					animation="lazy"
				>
					This is a headline
				</Text>
				<Text variant="title">This is a title</Text>
				<Text variant="body">
					This is a body, with{" "}
					<Text variant="body" fontWeight="bold" tag="span">
						some bold
					</Text>{" "}
					in the middle
				</Text>
				<Text variant="label">This is a label</Text>
				<Stack
					enterStyle={{ opacity: 0, y: 10 }}
					animation={{
						opacity: "bouncy",
						y: "bouncy",
					}}
				>
					<Button onPress={() => setIsDisplayed(!isDisplayed)}>
						{`Click to ${isDisplayed ? "hide" : "show"}`}
					</Button>
				</Stack>
				<AnimatePresence>
					{isDisplayed && (
						<Text
							variant="headline"
							enterStyle={{
								opacity: 0,
								x: 10,
								scale: 0.9,
							}}
							exitStyle={{
								opacity: 0,
								x: 10,
								scale: 0.9,
							}}
							color="$accentColor"
							animation="lazy"
						>
							This is displayed
						</Text>
					)}
				</AnimatePresence>
				<Input placeholder="Type something" />
				<Text variant="body" marginBottom="$8">
					Some long lorem ipsum text: Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</Text>
			</YStack>
		</KeyboardAwareScrollView>
	);
}
