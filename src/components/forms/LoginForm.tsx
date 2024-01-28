"use client";
import cn from "@/libs/cn";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./TextInput";

type Inputs = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [login, { data, isError, isLoading, error }] = useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    if (data?.result.accessToken) {
      // router.push("/dashboard");
      redirect("/dashboard");
    }
  }, [data, error]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login(data);
  };

  // console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* register your input into the hook by invoking the "register" function */}
      {/* <div>{ JSON.stringify(loginData) }</div> */}

      <TextInput
        {...register("username", {
          maxLength: {
            value: 18,
            message: "username length should not be greater then 8",
          },
        })}
        label="Username or Email"
        placeholder="Enter your username"
        type="text"
        errors={errors}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <TextInput
        {...register("password", { required: "This field is required" })}
        label="Password"
        type="password"
        placeholder="Enter your password"
        errors={errors}
      />
      {/* errors will return when field validation fails  */}

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {/* {isLoading && ( */}
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className={cn("mr-2 animate-spin hidden", {
              block: isLoading,
            })}
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
          {/* )} */}
          Log in
        </button>
      </div>
    </form>
  );
}
