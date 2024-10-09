import { cookies } from "next/headers";

// This is the cookie name for Production
export const getAuthCookieName = () =>
	process.env.NODE_ENV === 'production'? "__Secure-next-auth.session-token": "next-auth.session-token"

export const getAuthHeader = () => {
	const nextCookies = cookies();
	const cookieName = getAuthCookieName();

	const nextAuthSessionToken = nextCookies.get(cookieName);

	// console.log(nextAuthSessionToken);

	return {
		headers: {
			Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
		},
	};
}