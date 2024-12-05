import { Button as TamaguiButton, styled } from "tamagui";

export const Button = styled(TamaguiButton, {
	variants: {
		disabled: {
			true: {
				opacity: 0.5,
			},
		},
	},
});
