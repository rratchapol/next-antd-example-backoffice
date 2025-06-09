// service/userservice.ts
import axios from './axiosInstance';

export interface User {
  id: number;
  username: string;
  password?: string; 
  firstname?: string;
  lastname?: string;
  email?: string; 
  phone?: string; 
  role: string;
  status?: string;
  address?: string;
  district: string;
  province: string;
  location_lat?: string;
  location_lng?: string;

  restaurant_branch_id?: number;  // สำหรับร้านค้า
  restaurant_name?: string; 
  job_position?: string;

  vehicle_type?: string;           // สำหรับอาสา
  vehicle_plate_no?: string;
  max_capacity_kg?: number;
  network_id?: number;
}

// mock data
const mockUsers: User[] = [
  {
    id: 1,
    username: "aaa aaaaaa",
    role: "manager",
    district: "A1",
    province: "Ayuthaya",
  },
  {
    id: 2,
    username: "bbb bbbbbb",
    role: "staff",
    district: "A2",
    province: "Bangkok",
  },
  {
    id: 17,
    username: "ccc cccccc",
    role: "admin",
    district: "A3",
    province: "Chiang Mai",
  },
  {
    id: 18,
    username: "ddd dddddd",
    role: "user",
    district: "A4",
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


export const createUser = async (user: User): Promise<User> => {
  try{
    const res = await axios.post('/users', user);
    return res.data;
  }catch(error){
    throw error;
  }
};


export const getUserss = async (): Promise<User[]> => {
  try{
    const res = await axios.get('/users');
    return res.data;
  }catch(error){
    throw error;
  }
};

export const getUsersbyId = async (id: string | number): Promise<User> => {
  try{
    const res = await axios.get('/users/' + id);
    return res.data;
  }catch(error){
    throw error;
  }
};

export const updateUser = async (id: string | number, user: User): Promise<User> => {
  try{
    const res = await axios.put('/users/' + id, user);
    return res.data;
  }catch(error){
    throw error;
  }
};