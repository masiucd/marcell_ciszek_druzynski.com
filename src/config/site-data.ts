const siteData = {
	site: {
		title: "Marcell Ciszek Druzynski",
		description:
			"My personal website, blog and portfolio. I write about web development, programming, and other tech-related topics.",
		author: "Marcell Ciszek Druzynski",
		email: "marcell.cidr@gmail.com",
		url: "",
	},
	// socialX: {
	// 	twitter: "https://x.com/masiu_cd",
	// 	github: "https://github.com/masiucd",
	// 	linkedin: "https://www.linkedin.com/in/marcell-cd",
	// 	bluesky: "https://bsky.app/profile/masiucd.bsky.social",
	// },
	social: [
		{
			name: "twitter",
			url: "https://x.com/masiu_cd",
		},
		{
			name: "github",
			url: "https://github.com/masiucd",
		},
		{
			name: "instagram",
			url: "https://www.instagram.com/masiu_cd",
		},
		{
			name: "bluesky",
			url: "https://bsky.app/profile/masiucd.bsky.social",
		},
	] as const,
} as const;

export default siteData;
