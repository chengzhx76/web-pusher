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
    redirect: '/channel/list',
    component: () => import('@/views/channel/layout'),
    children: [
      {
        path: 'list',
        name: 'channel_list',
        meta: {
          title: '列表'
        },
        component: () => import('@/views/channel/list')
      },
      {
        path: 'setting',
        name: 'channel_setting',
        meta: {
          title: '设置'
        },
        component: () => import('@/views/channel/setting')
      },
    ]
}

export const routers = [
    loginRouter,
    channelRouter
];