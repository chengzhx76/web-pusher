export const appRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/dashboard',
    component: () => import('@/views/dashboard/Test'),
    children: [
        {
            path: 'test',
            name: 'test',
            meta: {
                title: '小组件',
                noCache: true
            },
            component: () => import('@/views/dashboard/Test')
        }
    ]
}

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/errorPage/404')
};

export const routers = [
    appRouter
];