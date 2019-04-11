export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: () => import('@/views/login')
}
export const channelRouter = {
    path: '/channel',
    name: 'channel',
    meta: {
        title: '通道管理'
    },
    component: () => import('@/views/channel')
}

export const routers = [
    loginRouter,
    channelRouter
];