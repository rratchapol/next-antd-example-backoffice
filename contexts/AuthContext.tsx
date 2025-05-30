"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/axiosInstance";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
// import loginservice from "@/services/loginservice";
import { message } from "antd";
import { loginservice } from "@/services/loginservice";
import PopUp, { PopUpLoginFail } from "@/components/popup/PopUp";
interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  line_uuid: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (values: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [showLoginFail, setShowLoginFail] = useState(false);
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

      const userData = await api.get<User>("/auth/profile");
      setUser(userData.data);
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
      setIsReady(true);
    }
  };

  const login = async (values: { email: string; password: string }) => {
    try {
      const res = await loginservice(values);
      // console.log("response:", res);
      // console.log("Login response:", res.data);
      // console.log("token response:", res.data.accessToken);
      // console.log("response status:", res.status);
      if (res.status == "success") {
        localStorage.setItem("token", res.data.accessToken);
        checkAuth();
        router.push("/dashboard");
      } else {
        setShowLoginFail(true);
        console.error("Login errorxxxxxxxx:", res.message);
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
        login ,
        logout,
        isAuthenticated: !!user,
        isReady,
      }}
    >
      {/* {children} */}
      {!loading ? children : <LoadingSpinner />}
    <PopUpLoginFail
      open={showLoginFail}
      title="เข้าสู่ระบบไม่สำเร็จ"
      content="อีเมลหรือรหัสผ่านไม่ถูกต้อง"
      onOk={() => setShowLoginFail(false)}
      onCancel={() => setShowLoginFail(false)}
      okText="ตกลง"
      cancelText="ปิด"
    />
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


