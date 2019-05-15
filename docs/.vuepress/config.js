module.exports = {
    title:'zz',
    description: '',
    dest: './dist',
    base: '/vuepress-demo/',
    themeConfig: {
        nav: [
            { text: 'demo', link: '/share/' }
        ],
        siderbar: [
            {
                title: 'demo',
                collapsable: false,
                children: []
            }
        ]
    }
}