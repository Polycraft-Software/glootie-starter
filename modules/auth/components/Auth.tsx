import { Button } from "@/ui/Button";
import { Text } from "@/ui/Text";
import { useRef, useState } from "react";
import type { TextInput } from "react-native";
import { Form, Input, XStack, YStack } from "tamagui";
import { useAuth } from "../useAuth";

export function Auth() {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);

	const { login, signup } = useAuth();

	const handleSubmit = () => {
		if (isLogin) {
			login(email, password);
		} else {
			signup(email, password);
		}
	};

	return (
		<YStack padding="$4" gap="$4" width="100%" maxWidth={500}>
			<YStack position="relative" height="$4">
				<Text
					position="absolute"
					width="100%"
					variant="display"
					size="$small"
					textAlign="center"
					animation="quick"
					opacity={isLogin ? 1 : 0}
					x={isLogin ? 0 : -100}
				>
					Welcome
				</Text>
				<Text
					position="absolute"
					width="100%"
					variant="display"
					size="$small"
					textAlign="center"
					animation="bouncy"
					opacity={isLogin ? 0 : 1}
					x={isLogin ? 100 : 0}
				>
					Create account
				</Text>
			</YStack>

			<Form onSubmit={handleSubmit} paddingTop="$4">
				<YStack gap="$4">
					<Input
						ref={emailRef}
						placeholder="Email"
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
						keyboardType="email-address"
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current?.focus()}
						submitBehavior="submit"
						autoComplete="email"
					/>

					<Input
						ref={passwordRef}
						placeholder="Password"
						value={password}
						onChangeText={setPassword}
						secureTextEntry
						returnKeyType="go"
						autoCapitalize="none"
						autoComplete="password"
						onSubmitEditing={handleSubmit}
					/>

					<Form.Trigger asChild>
						<Button theme="accent">{isLogin ? "Login" : "Sign Up"}</Button>
					</Form.Trigger>
				</YStack>
			</Form>

			{/* <XStack alignItems="center" gap="$4">
				<Separator />
				<Text variant="body">or</Text>
				<Separator />
			</XStack>

			<XStack gap="$4" justifyContent="center">
				<Button disabled flex={1}>
					Google login
				</Button>
				<Button disabled flex={1}>
					Apple login
				</Button>
			</XStack> */}

			<XStack justifyContent="center" gap="$2" marginTop="$4">
				<Text variant="body">
					{isLogin ? "Don't have an account?" : "Already have an account?"}
				</Text>
				<Text
					variant="body"
					color="$accentColor"
					onPress={() => setIsLogin(!isLogin)}
					cursor="pointer"
				>
					{isLogin ? "Sign Up" : "Login"}
				</Text>
			</XStack>
		</YStack>
	);
}
