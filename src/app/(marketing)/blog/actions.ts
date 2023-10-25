"use server";

import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export async function filterTags(tags: string[]) {
	let cookiesStore = cookies();
	cookiesStore.set("storedTags", JSON.stringify(tags), {
		secure: true,
	});
	revalidatePath("/blog");
}
