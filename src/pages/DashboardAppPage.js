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
            <AppWidgetSummary title="Tổng người dùng" total={100} icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng doanh thu " total={1352831} color="info" icon={'ant-design:dollar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng đơn hàng" total={30} color="warning" icon={'ant-design:dropbox-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng thành viên premium" total={30} color="error" icon={'ant-design:sketch-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Doanh Thu Theo Từng Tháng"
              subheader="(+43%) Hơn Với Năm Ngoái"
              chartLabels={[
                '02/01/2023',
                '01/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'Tổng doanh thu theo tháng',
                  type: 'column',
                  fill: 'solid',
                  data: [230000, 110000, 220000, 270000, 130000, 220000, 370000, 210000, 440000, 220000, 300000],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Biểu đồ premium và normal"
              chartData={[
                { label: 'Premium', value: 30 },
                { label: 'Normal', value: 100 },
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

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Thông tin mạng xã hội"
              list={[
                {
                  name: 'FaceBook',
                  value: 942,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Instagram',
                  value: 341212,
                  icon: <InstagramOutlined/>,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
