import { error, redirect } from "@sveltejs/kit";

export const GET = async (event) => {
    const {error: logoutError} = await event.locals.supabase.auth.signOut();
    if (logoutError) error(500, 'Error: Logging out! Please try again!');
    redirect(302, '/');
};