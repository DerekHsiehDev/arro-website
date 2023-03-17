import React, { useRef, useState, useEffect } from "react";
import {
	Modal,
	Input,
	Row,
	Checkbox,
	Button,
	Text,
	Navbar,
	Spacer,
} from "@nextui-org/react";
import animationData from "public/127764-purple-sent.json";
//@ts-ignore
import Lottie from "react-lottie";

function NewsletterForm() {
	const [visible, setVisible] = React.useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};
	// 1. Create a reference to the input so we can fetch/clear it's value.
	// 2. Hold a message in state to handle the response from our API.
	const [email, setEmail] = useState("");

	const subscribe = async () => {

		const userInput = email;
		setEmail("");
		setVisible(false);
		
		// 3. Send a request to our API with the user's email address.
		const res = await fetch("/api/subscribe", {
			body: JSON.stringify({
				//@ts-ignore
				email: userInput,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { error } = await res.json();

		if (error) {
			// 4. If there was an error, update the message in state.
			console.error(error.message);
			return;
		}
	};

	return (
		<>
			<Button auto onPress={handler}>
				Newsletter
			</Button>
			<Modal
				closeButton
				blur
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				{hasAnimationPlayed && (
					<Modal.Header css={{ marginBottom: 0 }}>
						<Text color="#fff" b size={"$3xl"}>
							Subscribe to our
							<Text b size={"$3xl"} color="primary">
								{" "}
								newsletter
							</Text>
						</Text>
					</Modal.Header>
				)}
				<Modal.Body>
					{!hasAnimationPlayed && (
						<Lottie
							options={defaultOptions}
							height={300}
							eventListeners={[
								{
									eventName: "complete",
									callback: () => setHasAnimationPlayed(true),
								},
							]}
						/>
					)}
					{hasAnimationPlayed && (
						<Input
							css={{ marginTop: 40 }}
							clearable
							bordered
							fullWidth
							color="primary"
							size="lg"
							placeholder="Email"
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.currentTarget.value);
							}}
						/>
					)}
				</Modal.Body>
				<Modal.Footer>
					{hasAnimationPlayed && (
						<>
							<Button auto flat color="error" onPress={closeHandler}>
								Close
							</Button>
							<Button
								auto
								onPress={() => {
									subscribe();
								}}
							>
								Subscribe
							</Button>
						</>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default NewsletterForm;
