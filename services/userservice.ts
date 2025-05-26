// service/userservice.ts

export interface User {
  id: number;
  name: string;
  role: string;
  area: string;
  province: string;
}

// mock data
const mockUsers: User[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    role: "manager",
    area: "A1",
    province: "Ayuthaya",
  },
  {
    id: 2,
    name: "bbb bbbbbb",
    role: "staff",
    area: "A2",
    province: "Bangkok",
  },
  {
    id: 3,
    name: "ccc cccccc",
    role: "admin",
    area: "A3",
    province: "Chiang Mai",
  },
  {
    id: 4,
    name: "ddd dddddd",
    role: "user",
    area: "A4",
    province: "Phuket",
  },
];

export const getUsers = async (): Promise<User[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};

// service/userservice.ts

const mockUsersbyId: User[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    role: "manager",
    area: "A1",
    province: "Ayuthaya",
  },

];

export const getUsersbyId = async (): Promise<User[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsersbyId);
    }, 500);
  });
};
