import { styled, View, YStack } from "tamagui";
import { Button } from "@/ui/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PrimaryButton = styled(Button, {
  width: "100%",
  borderRadius: 100,
  textProps: {
    fontWeight: "bold",
  },
});

const SecondaryButton = styled(Button, {
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: 100,
});

type Action = {
  text: string;
  onPress: () => void;
};

type OnboardingLayoutProps = {
  pageContent: React.ReactNode;
  primaryAction: Action;
  secondaryAction?: Action;
};

export default function OnboardingLayout({
  pageContent,
  primaryAction,
  secondaryAction,
}: OnboardingLayoutProps) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      paddingTop={top}
      paddingBottom={bottom}
      paddingHorizontal="$4"
      backgroundColor="$background"
    >
      <View flex={1} justifyContent="center" alignItems="center">
        {pageContent}
      </View>
      <YStack gap="$4" width="100%" paddingBottom="$4">
        <PrimaryButton onPress={primaryAction.onPress}>
          {primaryAction.text}
        </PrimaryButton>
        <SecondaryButton
          opacity={secondaryAction ? 1 : 0}
          onPress={secondaryAction?.onPress}
          animation="quick"
          animateOnly={["opacity"]}
        >
          {secondaryAction?.text}
        </SecondaryButton>
      </YStack>
    </YStack>
  );
}
