import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { InstagramOutlined } from '@ant-design/icons';
import Iconify from '../components/iconify';
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Skinpal </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Xin chào, chào mừng Huy đã quay trở lại
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng người dùng" total={30} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng doanh thu " total={1130000} color="info" icon={'ant-design:dollar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng đơn hàng" total={23} color="warning" icon={'ant-design:dropbox-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng thành viên premium" total={6} color="error" icon={'ant-design:sketch-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Tổng số lượng sản phẩm đã bán trong quý III"
              subheader=""
              chartLabels={[
                'Bông tẩy trang',
                'Chống nắng',
                'Combo kem dưỡng',
                'Kem dưỡng',
                'Nước tẩy trang',
                'Mặt nạ',
                'Sửa rửa mặt',
                'Serum'
              ]}
              chartData={[
                {
                  name: 'Tổng số lượng của sản phẩm bán ra',
                  type: 'column',
                  fill: 'solid',
                  data: [2, 4, 5, 3, 4, 3, 2, 1],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Biểu đồ premium và normal"
              chartData={[
                { label: 'Premium', value: 6 },
                { label: 'Normal', value: 30 },
              ]}
              chartColors={[
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Số lượng sản phẩm có ở mỗi loại"
              subheader=""
              chartData={[
                { label: 'Rửa mặt', value: 400 },
                { label: 'Làm sạch da', value: 430 },
                { label: 'Tẩy tế bào chết', value: 448 },
                { label: 'Mặt nạ', value: 470 },
                { label: 'Xịt khoáng', value: 540 },
                { label: 'Kem dưỡng', value: 580 },
                { label: 'Tinh chất ', value: 690 },
                { label: 'Chống nắng', value: 1100 },
                { label: 'Nước hoa hồng ', value: 1200 },
                { label: 'Khác', value: 1380 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
