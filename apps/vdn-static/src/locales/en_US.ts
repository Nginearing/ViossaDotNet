import type { Locale } from "@/i18n/locale";
import flakkaImg from "@/assets/flakka.png";
import discordImg from "@/assets/discord.png";

export default {
	localeName: "English",
	vilanticLangs: { viossa: "Viossa", wodox: "Wodoch" },
	navbar: {
		whatIsViossa: "What is Viossa?",
		resources: "Resources",
		kotoba: "Kotoba",
	},
	home: {
		layout: {
			order: ["whatIsViossa", "historyOfViossa", "community"],
			data: {
				whatIsViossa: {
					title: "What is Viossa?",
					text: "Viossa is a community-created artificial pidgin language, created to simulate the formation of natural pidgin languages. Viossa is characterized by its lack of standardization, with each speaker developing a personal idiolect. Spelling and pronunciation can vary greatly, and serve as a form of personal self-expression. Viossa is learnt and taught entirely by immersion — translation is prohibited while learning.",
					image: flakkaImg,
					alt: "Flag of the Viossa Language",
				},
				historyOfViossa: {
					title: "History of Viossa",
					text: "Viossa began as a Skype group in 2014, created by members of the r/conlangs community on Reddit, as an experiment to simulate the formation of a pidgin language. Pidgins are simplified languages resulting from contact between populations with no shared common language. Unlike most pidgins, which usually have two to three contributor languages, Viossa comes from many diverse languages. This is because people from all around the world helped to contribute to Viossa's vocabulary.",
					image: flakkaImg,
					alt: "Flag of the Viossa Language",
				},
				community: {
					title: "Community",
					text: "The Viossa community is rich and colourful, drawing from many global traditions due to its worldwide online membership. Since the teaching culture puts an emphasis on linguistic immersion, and discourages prescriptivism, the culture of Viossa is as diverse and varied as the language and the people who speak it. For many, their personal dialect is a key form of identity and expression. The fluid nature of Viossa and lack of defined meanings makes Viossa popular for creative purposes, such as poetry and songwriting.",
					image: null,
					alt: null,
				},
			},
		},
	},
	resources: {
		title: "Learning Resources",
		layout: {
			order: ["discord", "vikoli"],
			data: {
				discord: {
					title: "Discord Server",
					subtitle:
						"This is where most of the action happens! Hop on in!",
					desc: "Originally started in 2015 something something read the rules here, then click the link below to join!",
					link: "https://discord.gg/g3mG2gYjZD",
					rulesLink: "https://viossadiskordserver.github.io/rules",
					image: discordImg,
					alt: "Discord logo",
					joinText: "Join",
					rulesText: "Rules",
				},
				vikoli: {
					title: "Vikoli",
					subtitle:
						"Read Wikipedia but in Viossa",
					desc: "Founded in late 2020, Vikoli is a Wikipedia-inspired site especially for Viossa.",
					link: "https://vikoli.org",
					image: ,
					alt: "",
					joinText: "Join",
				},
				duolingo_stories: {
					title: "Duolingo Stories",
					subtitle:
						"Immerse yourself in Viossa dialogues",
					desc: "A collection of introductory Viossa courses inspired by Duolingo Stories, created to help you learn Viossa through dialogues to get a taste for immersion learning, with mini-quizzes along the way to test your knowledge. This will develop your understanding of idiolects and expand your vocabulary.",
					link: "https://duostories.org/vios-vios",
					image: ,
					alt: "",
					joinText: "Practice",
				},
				risskoli: {
					title: "Risskoli",
					subtitle:
						"Immerse yourself in Viossa dialogues",
					desc: "A monolingual Viossa dictionary for beginners, containing words alongside images to convey their meaning, and a variety of different pronounciations and spellings.",
					link: "https://risskoli.tumblr.com/",
					image: ,
					alt: "",
					joinText: "Browse",
				},
				davi_hanu: {
					title: "Davi Hanu!",
					subtitle:
						"Learn Viossa by ear",
					desc: "A podcast in Viossa which discusses the craziness that is our world - provided for all Viossadjins and Neodjins alike. Improve your listening comprehension, be familiarized with different variants of Viossa, and hear interesting stories along the way.",
					link: "https://pod.link/1536362137",
					image: ,
					alt: "",
					joinText: "Listen",
				},
				k_sluchj: {
					title: "K'Slucj?",
					subtitle:
						"Hear the news in Viossa"
					desc: "A short-form Viossa podcast about goings-on in worlds small and large.",
					link: "https://pod.link/aHR0cHM6Ly9mZWVkcy5yZWRjaXJjbGUuY29tLzliNmY4MjI1LWY5ZDItNGM5NS1hOGY0LTZmOGU5YjQxMmU5Nw",
					image: ,
					alt: "",
					joinText: "Listen",
				},
				github: {
					title: "GitHub page",
					subtitle:
						"Contribute to our codebases"
					desc: "Software projects related to Viossa (and the Discord server).",
					link: "https://github.com/ViossaDiskordServer",
					image: ,
					alt: "",
					joinText: "Collaborate",
				},
				wikipedia: {
					title: "Wikipedia article",
					subtitle:
						"Learn about Viossa's history"
					desc: "A bit of everything about Viossa as a language and community.",
					link: "https://en.wikipedia.org/wiki/Viossa",
					image: ,
					alt: "",
					joinText: "Read",
				},
				minecraft: {
					title: "Minecraft translation",
					subtitle:
						"Experience Minecraft in Viossa"
					desc: "Minecraft added support for Viossa in 1.20.5. (April 2024) Translation was carried out by the community through Crowdin, meaning there are a multitude of different spellings you may come across, due to different idiolects.",
					image: ,
					alt: "",
					joinText: "Read",
				},
				viossalibre: {
					title: "Viossalibre",
					subtitle:
						"A manual to learning Viossa."
					desc: ",
					image: ,
					alt: "",
					joinText: "Read",
				},
			}
		},
	},
	kotoba: {
		title: "Tropos-agnostic search",
		searchHelp: "To searcn tropos-agnostically, enter a term below.",
	},
} as const satisfies Locale;
