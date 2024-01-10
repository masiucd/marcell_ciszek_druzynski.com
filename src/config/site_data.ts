type SiteData = {
	title: string;
	author: {
		firstName: string;
		lastName: string;
	};
	description: string;
	url: string;
	fontBody: string;
	fontMono: string;
};

export const siteData: SiteData = {
	title: "Marcell Ciszek Druzynski",
	author: {
		firstName: "Marcell",
		lastName: "Ciszek Druzynski",
	},
	description: "Software Developer, endurance freak and a tech nerd.",
	url: "https://www.marcellcd.com",
	fontBody: "UI monospace",
	fontMono: "UI monospace",
};
