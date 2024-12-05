import { Image, View } from "tamagui";

export function Logo() {
	return (
		<View width={100} height={100} justifyContent="center" alignItems="center">
			<Image
				width={100}
				height={100}
				source={require("@/assets/images/react-logo.png")}
			/>
		</View>
	);
}
