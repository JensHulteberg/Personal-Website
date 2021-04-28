const Projects = [
	{
		Name: "The PEP",
		Description: "Tanglible light controlling.",
		PicPath: "src/assets/pep_square.png",
		LeadingImg: require("./Project pics/the_pep/front_detail.png"),
		pics: [
			{
				type: "img",
				source: require("./Project pics/the_pep/man_with_phone_white.png"),
			},
			{
				type: "img",
				source: require("./Project pics/the_pep/infographic.png"),
			},
		],
		Link: "/pep",
		tags: "SPECUALTIVE DESIGN",
		bread:
			"The PEP-device is a complex wearable that harvests the user's body heat in order to generate a personal storage of electricity. The stored electricity can then be consumed as the users see fit: powering their personal devices, sharing it with others, or selling the electricity back to the power grid.\n\n The PEP is a speculative design existing in a potential future where electricity is scarce and society has pivoten towards other more novel ways of producing electricity. The aim of the product is to explore our relationship towards technology, the bond between human and phone and the stresses of extensive technology use today. \n\n The PEP was created as part of my masters thesis at Chalmers University of Technology in collaboration with RISE (Research Institutes of Sweden). The artifact and the masters thesis was created by a two person team myself and Vendela Stensson.",
		ComponentName: "pep",
		ExternalLink: "http://www.seebeck.se",
	},
	{
		Name: "Wave Labs",
		Description:
			"An interactive tabletop designed to teach teens about Waves and their interaction in different media.",
		LeadingImg: require("./Project pics/wave_lab/leading.png"),
		PicPath: "src/assets/wavelab.jpg",
		pics: [
			{
				type: "vid",
				source: require("./Project pics/wave_lab/promoViddy.mp4"),
			},
			{
				type: "img",
				source: require("./Project pics/wave_lab/_MG_6295.jpg"),
			},
			{
				type: "img",
				source: require("./Project pics/wave_lab/DSC07978.jpg"),
			},
			{
				type: "img",
				source: require("./Project pics/wave_lab/experiment.jpg"),
			},
		],
		Link: "/waveLab",
		tags: "INTERACTIVE DESIGN",
		bread:
			"Wave labs is a connected system of vibrating media designed to make you curious to ask the first question of how and why things vibrate. Through the common medium of sound the system vibrates not only the air around you but also a liquid and a solid object. Through hearing, touch and vision you can experience the effect of the soundwaves with these different media. \n\n The Wave labs uses sound as the basis for learning. Thus it also uses a symbol for sound as a controller. By rotating a vinyl plate you can create all frequencies in the hearable spectrum. That same wavelength is then also applied to both a chladni plate and the water. This way a user gets direct feedback on how a wavelength interacts with different media. \n\n Our aim was, from start to finish, the creative learning experience one can have when exploring science. The system has no text or instructions, just a vinyl plate that can be rotated to create the wave. People approach the system eager to explore the soundscape and its interaction with the different media. But they leave it with a bit more understanding of what waves are and how they interact. \n\n Wave Labs was created as part of a course at Chalmers University of Technology under the theme of “visualizing the invisible”. My teammates on the project where: Simon Mare, Sten Rõngelep, Mike Shirnazar, Johannes Kjellberg and Sjoerd Hendriks.",
		ComponentName: "WaveLab",
		ExternalLink: "http://www.idxpo.se/2019/WaveLabsWebsite/index.html",
	},
	{
		Name: "Tågluffaieuropa.se",
		Description: "Webshop for selling digital rail passes.",
		PicPath: "src/assets/tagluffa_square.png",
		LeadingImg: require("./Project pics/tagluffa/tagluffa_demo.png"),
		pics: [{ type: "img", source: null }],
		Link: "/tagluffa",
		tags: "WEB DESIGN / DEVELOPMENT",
		bread:
			"Tagluffaieuropa.se is a travel guide website both designed, developed, and maintained by me and a college. The goal of the website is to provide informational and trustworthy guidance to help travellers make informed decisions and plan their vacations in advance. The site also works as a web shop, where it is possible to book and buy interrail tickets for a future vacation. Tågluffaieuropa.se is made with React and JavaScript and uses a MySQL-database to store relevant information. \n\n Tagluffaieuropa.se is an active project and the site is still in development. The current build can be found through the external link provided below. The development of the site is done in our free time and we hope to launch the site soon. My collaborator on this project is Emil Andersson.",
		ComponentName: "WaveLab",
		ExternalLink: "http://www.tagluffaieuropa.se",
	},
	{
		Name: "Lazarus Chair",
		Description: "Tanglible light controlling.",
		PicPath: "src/assets/lazarus_square.png",
		LeadingImg: require("./Project pics/the_lazarus_chair/leading.png"),
		pics: [
			{
				type: "img",
				source: require("./Project pics/the_lazarus_chair/23.png"),
			},
			{
				type: "img",
				source: require("./Project pics/the_lazarus_chair/24.png"),
			},
			{
				type: "img",
				source: require("./Project pics/the_lazarus_chair/25.png"),
			},
		],
		Link: "/lazarus",
		tags: "SPECUALTIVE DESIGN",
		bread:
			"The Lazarus chair is a system that lets you remove your senses and leaves you alone with your own mind. The user puts on the helmet, sits down in the chair and by interacting with the controls get the power to turn on or off their own senses one by one. This will hopefully force the user to interact with their own mind as it is simply the only thing left to reflect on when the world is removed. \n\n The system has 4 buttons that disable one sense each. The buttons are located on the sphere at the end of one of the right arm-rests. The buttons are ranked in terms of “severity of the experience”: smell, then hearing, then sight and then touch. As touch is the last sense you lose it is also the one used to code the buttons. They are simply labeled with bumps for navigation without sight. The buttons work firstly as a protective frame as they give the user full control over the experience. But it is also important to have the agency of the system in the hands of the user. This way, the experience is owned by the user and thus hopefully a stronger one. \n\n The Lazarus Chair is a speculative design and it exists solely as a basis for discussion on the self and our reliance on our senses. It was created by me as part of a course at Chalmers University of Technology.",
		ComponentName: "lazarus",
	},
	{
		Name: "Opal",
		Description: "Tanglible light controlling.",
		PicPath: "src/assets/fluxwheel_square.jpg",
		LeadingImg: require("./Project pics/flux_wheel/FluxRoom2.jpg"),
		pics: [
			{
				type: "vid",
				source: require("./Project pics/flux_wheel/Opal.mp4"),
			},
			{
				type: "img",
				source: require("./Project pics/flux_wheel/fluxwheel.jpg"),
			},
			{
				type: "img",
				source: require("./Project pics/flux_wheel/infromationposter_rotated.png"),
			},
		],
		Link: "/opal",
		tags: "TANGLIBLE DESIGN",
		bread:
			"Opal is an IOT (internet of things) light controller that  uses simple tangible interactions to modify lighting in a domestic environment. \n\n By spinning, flipping and shaking the token a user can select an active light, turn it on and change both color and intensity of the light source. All this without a single instruction and only one line of feedback, that is the light strip that mimics the active light source intensity and color. \n\n The FluxWheel contains a complex combination of rotary-encoders and gyroscopes that facilitates the interactions and it works without any cables simply existing as a token to be interacted with. \n\n was created as part of a Tangible Interaction course at Chalmers University of Technology. My teammates on the project where: Simon Mare, Sten Rõngelep, Mike Shirnazar, Johannes Kjellberg and Sjoerd Hendriks.",
		ComponentName: "WaveLab",
	},
	{
		Name: "Luta",
		Description: "Ergonomic workspace for circuit board production workers.",
		PicPath: "src/assets/luta_square.png",
		LeadingImg: require("./Project pics/luta/luta.png"),
		pics: [
			{
				type: "img",
				source: require("./Project pics/luta/detail.png"),
			},
		],
		Link: "/luta",
		tags: "INDUSTRIAL DESIGN",
		bread:
			"Luta is an ergonomic workspace for industrial soldering workers made to be as ergonomic as possible. It utilizes a plethora of functions to create a working environment that is both safe and healthy and prevents fatigue injury during long work days. \n\n Made with the users in mind the design of Luta is based on a substantial battery of data gathered through an extensive user study on industrial workers. Luta was created as part of a course at Chalmers university of technology together with my fellow student Viktor Djukic Dimander.",
		ComponentName: "WaveLab",
	},
	{
		Name: "Alizea housing",
		Description: "Redefining housing with compact living spaces.",
		PicPath: "src/assets/hallbart_square.png",
		LeadingImg: require("./Project pics/alizea_housing/Rendering.jpg"),
		pics: [
			{
				type: "img",
				source: require("./Project pics/alizea_housing/Huset.jpg"),
			},
			{
				type: "img",
				source: require("./Project pics/alizea_housing/Kokperspektiv3.jpg"),
			},
			{
				type: "img",
				source: require("./Project pics/alizea_housing/picutre.png"),
			},
		],
		Link: "/alizea",
		tags: "INDUSTRIAL DESIGN",
		bread:
			"The Alizea house redefines living by facilitating the possibility for homeowners to rent out a smaller compact living space on their own land. All aspects of the housing are designed with compact and effective living in mind creating a living experience that is grand on a smaller scale. \n\n The house was developed in collaboration with a housing company and was created with the users in mind focusing on their needs and desires. Thus the house is extremely flexible both internally and externally making space for a plethora of different functions and additions for greater personalisation. \n\n The housing concept was created as part of my bachelor thesis at Industrial Design Engineering at Chalmers University of Technology. My teammates on the project where: Magnus Berg, Linnea Bjöörn, Mattias Hallin, Elias Jansson and Linn Stolt",
		ComponentName: "WaveLab",
	},
	{
		Name: "Kingz of Wizardz",
		Description: "Co-op game with wizars fighting each other.",
		PicPath: "src/assets/kingz_square.png",
		LeadingImg: require("./Project pics/kingz/leading.png"),
		pics: [
			{
				type: "img",
				source: require("./Project pics/kingz/intro.PNG"),
			},
			{
				type: "img",
				source: require("./Project pics/kingz/play.PNG"),
			},
			{
				type: "img",
				source: require("./Project pics/kingz/death.PNG"),
			},
		],
		Link: "/kingz",
		tags: "GAME DEVELOPMENT",
		bread:
			"It is Halloween, the year 19XX and the moon hangs low over a tiny village on the outskirts of Duskvale County. But this is no ordinary town. In this godforsaken place, two ancient wizards rise from the grave, on All Hallows' Eve, to duke it out in an all-out, fireball-fueled wizard battle. Caught in the crossfire of this ancient grudge are the villagers. These peaceful skeletons and humans, friends by day, are at night forced by the wizards into a terrible battle. \n\n In this two-player nightmare, take up arms as Malufix, the Wizard of Light, or his immortal enemy, the Dark Warlock Bulfass. Burn your enemies and be the lone winner when the sun's first rays break the dawn. Who will win and become The King of Wizards? \n\n Kingz of Wizards is a tiny game created during a self organised game-jam. The other participants of the jam were:  Fabian Sörensson, Joel Heinerud, Magnus Bosch Huttu and Jakob Jarmar.",
		ComponentName: "WaveLab",
		ExternalLink: "https://www.lexaloffle.com/bbs/?pid=58761",
	},
];

export default Projects;
