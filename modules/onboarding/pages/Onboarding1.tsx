import { Text } from "@/ui/Text";
import { router } from "expo-router";
import OnboardingLayout from "../components/OnboardingLayout";
import { YStack } from "tamagui";
export default function Onboarding1() {
  return (
    <OnboardingLayout
      pageContent={
        <YStack gap="$4" alignItems="center" paddingHorizontal="$4">
          <Text variant="display" size="$small">
            Onboarding 1
          </Text>
          <Text variant="body" textAlign="center">
            Welcome to the app. This is the first step of the onboarding
            process.
          </Text>
        </YStack>
      }
      primaryAction={{
        text: "Next",
        onPress: () => router.push("/onboarding2"),
      }}
    />
  );
}
