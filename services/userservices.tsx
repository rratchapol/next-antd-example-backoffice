

// services/loginService.ts
import axios from './axiosInstance';

export const getUsers = async (email: string, password: string) => {
  const response = await axios.post('/login', { email, password });
  return response.data;
};


// services/userservices.ts
export async function getUserss() {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}

export async function getUser() {
  const res = await fetch("http://localhost:3000/api/users");
  const data: any[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["admin"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["user"],
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    tags: ["manager"],
  },
];
  return data;
}