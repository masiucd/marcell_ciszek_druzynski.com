"use server";
import {z} from "zod";

let SendEmailSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

type SendEmailState = "OK" | "IDLE" | "ERROR";

export async function sendEmail(_prevState: SendEmailState, data: FormData) {
	"use server";
	let name = data.get("name");
	let email = data.get("email");
	let message = data.get("message");
	let result = SendEmailSchema.safeParse({name, email, message});
	if (!result.success) {
		return "ERROR";
	}
	return "OK";
	// send email here (resend)
}
