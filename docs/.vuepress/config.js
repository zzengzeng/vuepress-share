module.exports = {
    title:'zz',
    description: '',
    dest: './dist',
    base: '/vuepress-demo/',
    themeConfig: {
        nav: [
            { text: '分享', link: '/share/' }
        ],
        siderbar: [
            {
                title: '分享',
                collapsable: false,
                children: []
            }
        ]
    }
}