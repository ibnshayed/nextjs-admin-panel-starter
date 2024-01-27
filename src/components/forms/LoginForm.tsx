"use client";
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, errors);

  // console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* register your input into the hook by invoking the "register" function */}
      <TextInput
        {...register("username", {
					maxLength: {
						value: 8,
						message: "username length should not be greater then 8"
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
          Sign up
        </button>
      </div>
    </form>
  );
}
