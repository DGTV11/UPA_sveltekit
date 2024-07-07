import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const users = [
    { username: 'test0', password: 'test', isAdmin: true },
    { username: 'test1', password: 'test', isAdmin: false },
    { username: 'test2', password: 'test', isAdmin: false },
    { username: 'test3', password: 'test', isAdmin: false },
]

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const username = data.get('username');
        const password = data.get('password');
        const user = users.find((user) => user.username === username && user.password === password);

        if (!user) {
            // console.log('No user!');
            return fail(400, { username, invalidUser: true });
        } else {
            // console.log(user);
            redirect(303, '/');
        }
    }
}