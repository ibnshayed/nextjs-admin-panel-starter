"use client";
import { useAppSelector } from "@/redux/app/hook";
import { useEffect, useState } from "react";

const HeaderOne = () => {
  const { user } = useAppSelector((state) => state.auth) || {};
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={
        "h-[64px] overflow-hidden p-5 flex justify-between items-center"
      }
    >
      <div></div>
      <div></div>
      <div>
        {isClient && user ? (
          <p>{user?.firstName}</p>
        ) : (
          <p className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></p>
        )}
      </div>
    </div>
  );
};

export default HeaderOne;
