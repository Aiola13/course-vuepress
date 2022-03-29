module.exports = [
	{ link: "/README.md", text: "Introduction" },
	{
		text: 'PHP',
		collapsible: true,
		children: [
			{
				text: 'Les Bases',
				collapsible: true,
				children: [
					{ link: '/docs/PHP/README.md', text: 'Plan' },
					{ link: '/docs/PHP/basics.md', text: 'Notion de Base' },
					{ link: '/docs/PHP/data.md', text: 'Les données' },
					{
						link: '/docs/PHP/instructions.md',
						text: 'Abordons les instructions',
					},
					{ link: '/docs/PHP/array.md', text: 'Les tableaux' },
					{ link: '/docs/PHP/superglobal.md', text: 'Les Super Globales' },
					{ link: '/docs/PHP/functions.md', text: 'Les fonctions' },
					{ link: '/docs/PHP/object.md', text: 'Les objets' },
					{ link: '/docs/PHP/plus.md', text: 'Les notions supplémentaires' },
				],
			},
			{
				text: 'Les TP',
				collapsible: true,
				children: [
					{ link: '/docs/PHP/TP/tp1.md', text: 'Plan' },
					{ link: '/docs/PHP/TP/tp2.md', text: 'Plan' },
					{ link: '/docs/PHP/TP/tp3.md', text: 'Plan' },
					{ link: '/docs/PHP/TP/tp4.md', text: 'Plan' },
					{ link: '/docs/PHP/TP/tp5.md', text: 'Plan' },
				],
			},
		],
	},
	{
		text: 'Windows',
		collapsible: true,
		children: [
			{
				text: 'Utilisation',
				collapsible: true,
				children: [
					{ link: '/docs/Windows/README.md', text: 'Base' },
					{ link: '/docs/Windows/setup.md', text: 'Installation' },
					{ link: '/docs/Windows/setting.md', text: 'Paramétrage' },
				],
			},
		],
	},
];
