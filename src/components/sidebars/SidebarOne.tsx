"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import Dropdown from "../dorpdowns/dropdown";

const SidebarOne = () => {
  const [open, setOpen] = useState(false);
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
                  className={`w-5 h-5 transition-all duration-500 ease-in-out ${
                    open && "-rotate-180"
                  }`}
                />
              </div>
              <div
                className={`ml-5 max-h-0 overflow-hidden transition-all duration-500 ease-linear ${
                  open && "max-h-screen"
                } `}
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
      </div>
    </div>
  );
};

export default SidebarOne;
