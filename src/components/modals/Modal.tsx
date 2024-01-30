"use client";
import cn from "@/libs/cn";
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, close }) => {
  if (!open) {
    return null;
  }

  return (
    <div
      onClick={() => close(false)}
      className="absolute inset-x-0 inset-y-0  bg-gray-600/50 flex justify-center items-center overflow-hidden"
    >
      {open && (
        <div
          className={cn(
            "relative bg-white w-1/3 h-1/2 rounded-lg shadow-md animate-modal-open"
          )}
        >
          <button
            onClick={() => close(false)}
            className="group absolute right-0 m-3 h-8 w-8 hover:bg-gray-100 flex justify-center items-center rounded-md"
          >
            <IoMdClose className="group-hover:rotate-180 transition-all duration-300 ease-in-out fill-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
