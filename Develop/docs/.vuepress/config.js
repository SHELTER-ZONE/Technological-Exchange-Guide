module.exports = {
    title :  'SHELTER ZONE | 技術交流指南 Technological Exchange Guide',
    description:  'SZ Technological Exchange Guide',
    themes: 'vuepress',
    base: '/Technological-Exchange-Guide/',

    themeConfig: {
        //  頁面滾動
        smoothScroll: true,
        // 側邊導航欄設定
        sidebar:[
            '/',
            {
                title:'Communicate',
                path:'/Communicate/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'Communicate/attitude.md',
                ]
            },
            {
                title:'UtilsTools',
                path:'/UtilsTools/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'UtilsTools/tools.md',
                ]
            },
            {
                title:'Coding',
                path:'/Coding/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'Coding/must_learn',
                    '/Coding/sense',
                    '/Coding/dont_todo',
                    '/Coding/need_todo',
                ]
            },
            {
                title:'3D',
                path: '/3D/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '3D/must_learn',
                    '/3D/sense',
                    '/3D/dont_todo',
                    '/3D/need_todo',
                ]
            },
            {
                title:'2D',
                path: '/2D/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '2D/must_learn',
                    '/2D/sense',
                    '/2D/dont_todo',
                    '/2D/need_todo',
                ]
            },
        ],

        //  頂部導航欄
        nav: [
            { text: 'SHELTER ZONE 官網', link: 'https://shelter-zone.github.io/SHELTER-ZONE/' },
            { text: 'Github', link: 'https://github.com/SHELTER-ZONE/Technological-Exchange-Guide' },
        ]
    }        
}
