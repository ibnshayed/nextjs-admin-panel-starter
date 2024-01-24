"use client";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* register your input into the hook by invoking the "register" function */}
      <div className="space-y-2">
        <label className="text-sm">Username</label>
        <input
          // defaultValue="test"
          {...register("username")}
          placeholder="Enter your username"
          className="block w-full bg-transparent p-2 border-2 focus:border-blue-500 rounded-lg outline-none"
        />
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="space-y-2">
        <label className="text-sm">Password</label>
        <input
          {...register("password", { required: true })}
          placeholder="Enter your password"
          type="password"
          className="block w-full p-2 border-2 focus:border-blue-500 rounded-lg outline-none"
        />
        {errors.password && (
          <small className="text-red-500">This field is required</small>
        )}
        {/* errors will return when field validation fails  */}
      </div>

      <div>
        <input
          type="submit"
          className="block w-full bg-blue-500 text-center text-white rounded-lg py-2 cursor-pointer"
        />
      </div>
    </form>
  );
}
