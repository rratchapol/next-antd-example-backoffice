// service/userservice.ts

export interface Community {
  id: number;
  username: string;
  firstname?: string;
  lastname?: string;
  email?: string; 
  phone?: string; 
  population?: number;
  network?: string;
  status?: string;
  address?: string;
  district: string;
  province: string;
  location_lat?: string;
  location_lng?: string;
}

// mock data
const mockUsers: Community[] = [
  {
    id: 1,
    username: "aaa aaaaaa",
    population: 1000,
    network: "Network A",
    district: "A1",
    province: "Ayuthaya",
  },
  {
    id: 2,
    username: "bbb bbbbbb",
    population: 2000,
    network: "Network B",
    district: "A2",
    province: "Bangkok",
  },
  {
    id: 3,
    username: "ccc cccccc",
    population: 1500,
    network: "Network C",
    district: "A3",
    province: "Chiang Mai",
  },
  {
    id: 4,
    username: "ddd dddddd",
    district: "A4",
    province: "Phuket",
  },
];

export const getCommunities = async (): Promise<Community[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};

// service/userservice.ts

const mockUsersbyId: Community[] = [
  {
    id: 1,
    username: "aaa aaaaaa",
    firstname: "AAA",
    lastname: "AAAAAA",
    email: "aaa@gmail.com",
    phone: "0123456789",
    status: "active",
    address: "123/45 หมู่ 1 ตำบล A อำเภอ B จังหวัด C",
    district: "A1",
    province: "Ayuthaya",
    location_lat: "14.0000",
    location_lng: "100.0000",
  },

];

export const getUsersbyId = async (): Promise<Community[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsersbyId);
    }, 500);
  });
};
