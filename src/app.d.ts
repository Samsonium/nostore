// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		
		/** Data of user token from cookies */
		interface DecodedUserToken {
			username: string;
			expires: Date;
		}
		
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
