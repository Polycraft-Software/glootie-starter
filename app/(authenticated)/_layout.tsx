import { useAuth } from "@/modules/auth/useAuth";
import { Redirect, Tabs } from "expo-router";

export default function Layout() {
	const { sessionUser } = useAuth();

	if (!sessionUser) {
		return <Redirect href="/sign-in" />;
	}

	return (
		<Tabs>
			<Tabs.Screen name="example/index" />
			<Tabs.Screen name="anotherTab" />
			<Tabs.Screen name="index" options={{ href: null }} />
		</Tabs>
	);
}
