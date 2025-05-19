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
];

export const getUsers = async (): Promise<User[]> => {
  // จำลอง delay เหมือนเรียก API จริง
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};
