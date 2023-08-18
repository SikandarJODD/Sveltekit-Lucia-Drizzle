
// import { db } from "$lib/server";
// import { users } from "$lib/server/schema";
// import type { PageServerLoad } from './$types';
// export const load: PageServerLoad = async () => {
//     let allUsers = await db.select().from(users);
//     return {
//         allUsers
//     }
// };
import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, "/login");
	return {
		userId: session.user.userId,
		username: session.user.username
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/login"); // redirect to login page
	}
};