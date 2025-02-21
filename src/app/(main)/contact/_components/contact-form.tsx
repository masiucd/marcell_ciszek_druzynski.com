"use client";
import {sendEmail} from "@/app/actions";
import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/text-area";
import {useFormState, useFormStatus} from "react-dom";

export function ContactForm() {
	let [state, action, isPending] = useFormState(sendEmail, null);
	console.log({state, action, isPending});
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Send a Message</CardTitle>
				<CardDescription>
					Fill out the form below to get in touch with me.
				</CardDescription>
			</CardHeader>
			<form action={action}>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" name="name" placeholder="Your name" required />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="Your email"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							name="message"
							placeholder="Your message"
							required
						/>
					</div>
				</CardContent>
				<CardFooter>
					<SubmitButton />
				</CardFooter>
			</form>
		</Card>
	);
}

function SubmitButton() {
	let {pending} = useFormStatus();
	return (
		<Button type="submit" className="w-full">
			{pending ? "Sending..." : "Send Message"}
		</Button>
	);
}
