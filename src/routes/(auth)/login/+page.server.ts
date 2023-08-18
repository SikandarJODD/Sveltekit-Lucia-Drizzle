import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, "/");
    return {};
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get("email");
        const password = formData.get("password");
        // basic check
        if (
            typeof username !== "string" ||
            username.length < 1 ||
            username.length > 31
        ) {
            return fail(400, {
                message: "Invalid username"
            });
        }
        if (
            typeof password !== "string" ||
            password.length < 1 ||
            password.length > 255
        ) {
            return fail(400, {
                message: "Invalid password"
            });
        }
        try {
            // find user by key
            // and validate password
            const user = await auth.useKey(
                "email",
                username.toLowerCase(),
                password
            );
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            console.log(e);
            return fail(500, {
                message: "An unknown error occurred"
            });
        }
        // redirect to
        // make sure you don't throw inside a try/catch block!
        throw redirect(302, "/");
    }
};