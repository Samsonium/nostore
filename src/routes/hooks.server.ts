import type { Handle } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('nostore');
    if (!token) return resolve(event);
    
    const {}: App.DecodedUserToken = JSON.parse(token);
    
    return resolve(event);
};
