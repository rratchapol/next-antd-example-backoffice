"use client";

import LoginForm from "@/components/auth/LoginForm";
// import login from "@/services/loginservice";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  useEffect(() => {
    setIsClient(true);
  }, []);



  return (

        <LoginForm onLogin={login} />

  );
}
