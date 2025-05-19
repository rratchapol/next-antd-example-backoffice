"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/axiosInstance";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import loginservice from "@/services/loginservice";
import { message } from "antd";
interface User {
  admin_id: string;
  role: string;
//   name?: string;
//   image_url?: string;
//   token_balance?: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (values: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false); // ใช้เพื่อบอกว่า auth ได้ถูกตรวจสอบแล้ว
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const userData = await api.get<User>("/customer/1");
      setUser(userData.data);
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
      setIsReady(true);
    }
  };

  const login = async (values: { username: string; password: string }) => {
    try {
      const res = await loginservice(values);
      if (res.success && res.token) {
        localStorage.setItem("token", res.token);
        // setToken(res.token);
        message.success("เข้าสู่ระบบสำเร็จ");
        checkAuth();
        router.push("/users");
      } else {
        message.error(res.message || "เข้าสู่ระบบล้มเหลว");
      }
    } catch (error) {
      message.error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("hasSeenWelcome");
      setUser(null);

      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        isReady,
      }}
    >
      {/* {children} */}
      {!loading ? children : <LoadingSpinner />}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 

function setToken(token: any) {
    throw new Error("Function not implemented.");
}
