import { Text } from "@/ui/Text";
import { router } from "expo-router";
import OnboardingLayout from "../components/OnboardingLayout";
import { View, YStack } from "tamagui";
import { useState } from "react";
import { CircleCheck } from "@tamagui/lucide-icons";

export default function Onboarding2() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleEnableNotifications = () => {
    setIsEnabled(!isEnabled);
  };

  const handleGoToNextPage = () => {
    router.push("/sign-in");
  };

  return (
    <OnboardingLayout
      pageContent={
        <YStack gap="$4" alignItems="center" paddingHorizontal="$4">
          <Text variant="display" size="$small">
            Notifications
          </Text>
          <Text variant="body" textAlign="center">
            We'll send you notifications to keep you updated on your orders.
          </Text>
          <View opacity={isEnabled ? 1 : 0} animation="quick">
            <CircleCheck size={24} color="green" />
          </View>
        </YStack>
      }
      primaryAction={{
        text: isEnabled ? "Next" : "Enable notifications",
        onPress: () =>
          isEnabled ? handleGoToNextPage() : handleEnableNotifications(),
      }}
      secondaryAction={
        isEnabled
          ? undefined
          : {
              text: "Skip",
              onPress: () => router.push("/sign-in"),
            }
      }
    />
  );
}
