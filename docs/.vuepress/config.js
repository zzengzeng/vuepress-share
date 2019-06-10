module.exports = {
    title:'zz',
    description: '',
    dest: './docs/dist',
    base: '/vuepress-demo/',
    themeConfig: {
        nav: [
            { text: 'vuepress-demo', link: '/share/' }
        ],
        siderbar: [
            {
                title: 'vuepress-demo',
                collapsable: false,
                children: []
            }
        ]
    }
}
