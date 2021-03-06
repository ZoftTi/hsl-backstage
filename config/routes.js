export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/index',
    name: '首页',
    icon: 'crown',
    routes: [
      {
        path: '/index/banner',
        name: '轮播图',
        icon: 'smile',
        component: './Index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/cooperate',
    name: '携手合作',
    icon: 'crown',
    routes: [
      {
        path: '/cooperate/universities',
        name: '合作院校',
        icon: 'smile',
        component: './Cooperate/universities.jsx',
      },
      {
        path: '/cooperate/common',
        name: '校企合作',
        icon: 'smile',
        component: './Cooperate/common.jsx',
      },
      {
        path: '/cooperate/education',
        name: '教育体系',
        icon: 'smile',
        component: './Cooperate/education.jsx',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '新闻',
    icon: 'table',
    path: '/news',
    component: './News',
  },
  {
    name: '行业动态',
    icon: 'table',
    path: '/information',
    component: './Information',
  },
  {
    name: '新增文章',
    path: '/add-article',
    component: './AddArticle',
  },
  {
    name: '上传文章',
    path: '/upload-article',
    component: './UploadArticle',
  },
  {
    path: '/',
    redirect: '/index/banner',
  },
  {
    component: './404',
  },
];
