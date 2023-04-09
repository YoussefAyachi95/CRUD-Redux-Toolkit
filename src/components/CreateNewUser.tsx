import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import useUserActions from "../hooks/useUserActions";

export function CreateNewUser() {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setResult(null);

		const form = event.target;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit} className="">
				<TextInput name="name" placeholder="Name here" />
				<TextInput name="email" placeholder="Email here" />
				<TextInput name="github" placeholder="Github user here" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Add user
					</Button>
					<span>
						{result === "ok" && <Badge color='green'>Saved correctly</Badge>}
						{result === "ko" && <Badge color='red'>Error in some fields</Badge>}
					</span>
				</div>
			</form>
		</Card>
	);
}
