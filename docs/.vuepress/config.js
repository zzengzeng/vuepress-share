module.exports = {
    title:'zz',
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/vuepress-share/images/favicon.png' }]
    ],
    dest: './docs/dist',
    base: '/vuepress-share/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '记录', link: '/record/' }
        ],
        siderbar: [
            {
                title: '记录',
                collapsable: false,
                children: []
            }
        ]
    }
}
