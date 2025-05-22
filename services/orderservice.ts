// service/orderservice.ts

export interface Order {
  id: number;
  name: string;
  village: string;
  area: string;
  province: string;
  startdate: string;
  status: string;
}

// mock data
const mockUsers: Order[] = [
  {
    id: 1,
    name: "aaa aaaaaa",
    village: "บ้านเลขที่ 1",
    area: "A1",
    province: "Ayuthaya",
    startdate: "2023-10-01",
    status: "done",
  },
  {
    id: 2,
    name: "bbb bbbbbb",
    village: "บ้านเลขที่ 2",
    area: "A2",
    province: "Bangkok",
    startdate: "2023-10-02",
    status: "in progress",
  },
];

export const getOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500);
  });
};
