"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import Services from "@/components/home/Services";
import Overview from "@/components/appointments/Overview";

const HomePage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true); // allow page to render
    }
  }, [router]);

  if (!isAuthenticated) return null;

  return (
    <div>
      <Header />
      <Services />
      <Overview/>
    </div>
  );
};

export default HomePage;
