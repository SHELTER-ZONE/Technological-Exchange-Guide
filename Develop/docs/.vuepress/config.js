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
                title:'Coding',
                path:'/Coding/coding_index',
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
                path: '/3D/3D_index.md',
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
                path: '/2D/2D_index.md',
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
            { text: '官網', link: 'https://shelterzone627.wixsite.com/shelter-zone' },
            { text: 'Github', link: 'https://github.com/SHELTER-ZONE' },
        ]
    }        
}
