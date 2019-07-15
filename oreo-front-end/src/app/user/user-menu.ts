import { NbMenuItem } from '@nebular/theme';
import { pre_items } from '../others/menu';

export const MENU_ITEMS: NbMenuItem[] = [
  ...pre_items,
  {
    title: '资料设置',
    icon: 'nb-edit',
    link: '/user/profile',
  },
  // {
  //   title: '修改密码',
  //   icon: 'nb-bar-chart',
  //   link: '/user/reset-password',
  // },
  {
    title: '我的收藏',
    icon: 'nb-star',
    link: '/user/collection',
  },
  {
    title: '我的碎片',
    icon: 'nb-star',
    link: '/user/fragment',
  },
  // {
  //   title: '我的评论',
  //   icon: 'nb-bar-chart',
  //   link: '/user/comment',
  // },
];
