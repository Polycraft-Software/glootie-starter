import { Paragraph as TamaguiText, styled } from "tamagui";

export const Text = styled(TamaguiText, {
	variants: {
		variant: {
			display: {
				fontFamily: "$display",
			},
			headline: {
				fontFamily: "$headline",
			},
			title: {
				fontFamily: "$title",
			},
			body: {
				fontFamily: "$body",
			},
			label: {
				fontFamily: "$label",
			},
		},
	},
});
