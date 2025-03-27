import { useAuth } from "@/modules/auth/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
  const { sessionUser } = useAuth();

  if (sessionUser) {
    return <Redirect href="/(authenticated)" />;
  }

  return <Redirect href="/onboarding1" />;
}
