// service/userservice.ts

export interface Resturant {
  id: number;
  name: string;
  logo: string;
  branch: string;
  area: string;
  province: string;
}

// mock data
const mockUsers: Resturant[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    logo: "https://cms-tpq.theparq.com/wp-content/uploads/2020/07/AW_NEW-KFC-LOGO-2019-1024x724.jpg",
    branch: "manager",
    area: "A1",
    province: "Ayuthaya",
  },
  {
    id: 2,
    name: "bbb bbbbbb",
    logo: "https://cms-tpq.theparq.com/wp-content/uploads/2020/07/AW_NEW-KFC-LOGO-2019-1024x724.jpg",
    branch: "staff",
    area: "A2",
    province: "Bangkok",
  },
  {
    id: 3,
    name: "ccc cccccc",
    logo: "https://cms-tpq.theparq.com/wp-content/uploads/2020/07/AW_NEW-KFC-LOGO-2019-1024x724.jpg",
    branch: "admin",
    area: "A3",
    province: "Chiang Mai",
  },
  {
    id: 4,
    name: "ddd dddddd",
    logo: "https://cms-tpq.theparq.com/wp-content/uploads/2020/07/AW_NEW-KFC-LOGO-2019-1024x724.jpg",
    branch: "user",
    area: "A4",
    province: "Phuket",
  },
];

export const getResturant = async (): Promise<Resturant[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};
