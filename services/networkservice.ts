// service/userservice.ts

export interface Network {
  id: number;
  name: string;
  area: string;
  province: string;
}

// mock data
const mockUsers: Network[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    area: "A1",
    province: "Ayuthaya",
  },
  {
    id: 2,
    name: "bbb bbbbbb",
    area: "A2",
    province: "Bangkok",
  },
  {
    id: 3,
    name: "ccc cccccc",
    area: "A3",
    province: "Chiang Mai",
  },
  {
    id: 4,
    name: "ddd dddddd",
    area: "A4",
    province: "Phuket",
  },
];

export const getNetworks = async (): Promise<Network[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};

const mockUsersbyId: Network[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    area: "A1",
    province: "Ayuthaya",
  },

];

export const getNetworkbyId = async (): Promise<Network[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsersbyId);
    }, 500);
  });
};
