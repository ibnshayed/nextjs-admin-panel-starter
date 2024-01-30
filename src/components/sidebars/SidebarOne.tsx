"use client";
import cn from "@/libs/cn";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";
import Dropdown from "../dorpdowns/dropdown";

const SidebarOne = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const logoutHandler = () => {
    console.log("==============> clicked");
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    console.log("==============> clicked after");
    // redirect("/login");
    router.replace("/login");
  };

  return (
    <div className="h-screen p-6 overflow-hidden overflow-y-auto">
      <p className="font-semibold text-2xl">Admin Panel</p>
      <div className="mt-10">
        <p className="font-bold text-sm pb-1">Menu</p>
        <Link
          href={"/dashboard"}
          className="block p-2 hover:bg-gray-100 rounded-md"
        >
          Home
        </Link>

        <Dropdown>
          {(
            handleClick: MouseEventHandler<HTMLDivElement> | undefined,
            open: any
          ) => (
            <div>
              <div
                onClick={handleClick}
                className="p-2 rounded-md hover:bg-gray-100 flex justify-between items-center cursor-pointer"
              >
                <Link href={"/dashboard"}>Users</Link>
                <ChevronDownIcon
                  className={cn(
                    "w-5 h-5 transition-all duration-300 ease-in-out",
                    {
                      "-rotate-180": open,
                    }
                  )}
                />
              </div>
              <div
                className={cn(
                  "ml-5 max-h-0 overflow-hidden transition-all duration-300 ease-linear",
                  {
                    "max-h-screen": open,
                  }
                )}
              >
                <Link
                  href={"/dashboard/users/super-admin"}
                  className="block p-2 hover:bg-gray-100 rounded-md"
                >
                  Super Admin
                </Link>
                <Link
                  href={"/dashboard"}
                  className="block p-2 hover:bg-gray-100 rounded-md"
                >
                  Admin
                </Link>
                <Link
                  href={"/dashboard"}
                  className="block p-2 hover:bg-gray-100 rounded-md"
                >
                  Cutomer
                </Link>
              </div>
            </div>
          )}
        </Dropdown>

        <button
          onClick={logoutHandler}
          className="block w-full p-2 hover:bg-gray-100 rounded-md text-left"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default SidebarOne;
