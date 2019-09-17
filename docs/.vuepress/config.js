module.exports = {
    title:'zz',
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/vuepress-demo/images/favicon.png' }]
    ],
    dest: './docs/dist',
    base: '/vuepress-demo/',
    themeConfig: {
        nav: [
            { text: 'vuepress', link: '/share/' }
        ],
        siderbar: [
            {
                title: 'vuepress',
                collapsable: false,
                children: []
            }
        ]
    }
}
