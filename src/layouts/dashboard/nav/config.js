// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Product',
    path: '/dashboard/product',
    icon: icon('ic_air'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'discout',
    path: '/dashboard/discount',
    icon: icon('ic_cart'),
  },
  {
    title: 'comment',
    path: '/dashboard/comment',
    icon: icon('ic_blog'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: icon('ic_tour'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
