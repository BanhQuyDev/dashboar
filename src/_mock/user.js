import { faker } from '@faker-js/faker';
import { forEach, sample } from 'lodash';

// ----------------------------------------------------------------------
const randomePhone = []
// eslint-disable-next-line no-plusplus
for (let index = 0; index < 26; index++) {
  const randomePhone1 = parseInt((Math.random() * 9 + 1) * 10 ** (9 - 1), 10);
  randomePhone.push(randomePhone1)
}
const users = [
  {
    id: faker.datatype.uuid(),
    name: "Thành Đạt",
    phone: `0${randomePhone[1]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '28/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Việt Cường",
    phone: `0${randomePhone[2]}`,
    total: "377,000đ",
    status: "Đã thanh toán",
    date: '28/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thanh Nhã",
    phone: `0${randomePhone[3]}`,
    total: "525,000đ",
    status: "Đã thanh toán",
    date: '28/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thùy Trang",
    phone: `0${randomePhone[4]}`,
    total: "155,000đ",
    status: "Đã thanh toán",
    date: '28/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Như Quỳnh",
    phone: `0${randomePhone[6]}`,
    total: "390,000đ",
    status: "Đã thanh toán",
    date: '29/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hoài Thu",
    phone: `0${randomePhone[7]}`,
    total: "200,000đ",
    status: "Đã thanh toán",
    date: '29/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Phương Thảo",
    phone: `0${randomePhone[8]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '29/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hoàng Châu",
    phone: `0${randomePhone[9]}`,
    total: "525,000đ",
    status: "Đã thanh toán",
    date: '30/07/2023 10:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Quang Huy",
    phone: `0${randomePhone[10]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '30/07/2023 10:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Quang Huy",
    phone: `0${randomePhone[11]}`,
    total: "350,000đ",
    status: "Đã thanh toán",
    date: '30/07/2023 10:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Quang Huy",
    phone: `0${randomePhone[12]}`,
    total: "200,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Nguyên Vũ",
    phone: `0${randomePhone[13]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thanh Tùng",
    phone: `0${randomePhone[14]}`,
    total: "200,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thảo Vân",
    phone: `0${randomePhone[15]}`,
    total: "238,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 15:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Việt Cường",
    phone: `0${randomePhone[16]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 16:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thành Đạt",
    phone: `0${randomePhone[17]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 19:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thành Công",
    phone: `0${randomePhone[18]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '31/07/2023 23:23'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thùy Minh",
    phone: `0${randomePhone[19]}`,
    total: "1,460,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thúy Nga",
    phone: `0${randomePhone[21]}`,
    total: "561,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thảo Vân",
    phone: `0${randomePhone[20]}`,
    total: "1,200,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 10:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hồng Châu",
    phone: `0${randomePhone[22]}`,
    total: "100,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 21:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hồng Châu",
    phone: `0${randomePhone[23]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hồng Châu",
    phone: `0${randomePhone[24]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hồng Châu",
    phone: `0${randomePhone[1]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hồng Châu",
    phone: `0${randomePhone[0]}`,
    total: "400,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Thanh Nhàn",
    phone: `0${randomePhone[26]}`,
    total: "900,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
  {
    id: faker.datatype.uuid(),
    name: "Hoàng Hiếu",
    phone: `0${randomePhone[1]}`,
    total: "1,570,000đ",
    status: "Đã thanh toán",
    date: '27/07/2023 20:51'
  },
]
export default users;
