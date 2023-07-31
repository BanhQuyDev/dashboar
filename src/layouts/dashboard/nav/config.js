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
    title: 'Đơn hàng',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  }
];

export default navConfig;
