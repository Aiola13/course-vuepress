const sidebar = require("./sidebar.js");

module.exports = {
    title: "Cours Multidisciplinaire [Done with VuePress]",
    description: "Cours",
    lang: "fr-FR",
    theme: '@vuepress/theme-default',
    plugins: [
        [
            "@vuepress/plugin-search",
            {
                locales: {
                    "/": {
                        placeholder: "Search",
                    },
                    "/zh/": {
                        placeholder: "搜索",
                    },
                    "/en/": {
                        placeholder: "Recherche",
                    },
                },
            },
        ],
    ],
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['link', { rel: 'icon', href: '/icons/book-icon-512x512.png' }],
    ],
    themeConfig: {
        logo: '/icons/book-icon-512x512.png',
        docsBranch: 'master',
        editLinks: true,
        nextLinks: true,
        prevLinks: true,
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        sidebarDepth: 0,
        navbar: [
            // NavbarItem
            // {
            //     text: 'Accueil',
            //     link: '/foo/',
            // },
            // NavbarGroup
            // {
            //     text: 'Group',
            //     children: ['/group/foo.md', '/group/bar.md'],
            // },
            // string - page file path
            '/README.md',
        ],
        sidebar: sidebar
    }
};