import Link from "next/link";
import { MdError } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-20 text-center rounded-md shadow-sm space-y-2">
        <MdError className="mx-auto fill-red-500 w-[200px] h-[200px] animate-bounce" />
        <h2 className="text-2xl">Not Found</h2>
        <p className="text-sm">Please return to dashboard</p>
        <Link
          href="/"
          className="block w-full bg-green-600 hover:bg-green-700 rounded-md text-white text-sm font-medium text-center py-2 "
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
