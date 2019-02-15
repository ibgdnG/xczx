import Home from '@/module/home/page/home.vue'; // 导入一个文件（ES6） @表示 src 目录
import page_list from '@/module/cms/page/page_list.vue';

export default [{
  path: '/',
  component: Home,
  name: 'CMS', // 菜单名称
  hidden: false,
  children: [
    {path: '/cms/page/list', name: "页面列表详情页", component: page_list, hidden: false}
  ]
}]
