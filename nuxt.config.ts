// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico", // Adjust the path if needed
				},
			],
		},
	},

	modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
