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
import {cn} from "@/lib/utils";
import {useEffect} from "react";
import {useFormState, useFormStatus} from "react-dom";

export function ContactForm() {
	let [state, action, isPending] = useFormState(sendEmail, "IDLE");
	// console.log({state, action, isPending});
	useEffect(() => {
		if (state === "OK") {
			setTimeout(() => {
				// reset the state
			}, 5000);
		}
	}, [state]);
	return (
		<Card
			className={cn(
				"w-full shadow-[0px_0px_11px_6px_rgba(46,53,255,0.5)]",
				state === "OK" && "border-green-600",
			)}
		>
			<CardHeader>
				<CardTitle>
					{state === "OK" ? "Message sent" : "Send a Message"}
				</CardTitle>
				<CardDescription className={cn(state === "OK" && "text-green-600")}>
					{state === "OK"
						? "Message sent successfully, I will get in touch as soon as possible  "
						: "Fill out the form below to get in touch with me."}
				</CardDescription>
			</CardHeader>
			<form action={action} className={cn(isPending && "opacity-50")}>
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
		<Button
			type="submit"
			className={cn(
				"w-full transition-shadow duration-150 hover:shadow-[0px_0px_3px_1px_rgba(10,10,10,5.5)]",
			)}
		>
			{pending ? "Sending..." : "Send Message"}
		</Button>
	);
}
