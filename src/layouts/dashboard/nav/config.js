// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Bảng điều khiển',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Người dùng',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Sản phẩm',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Bài viết',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }
];

export default navConfig;
