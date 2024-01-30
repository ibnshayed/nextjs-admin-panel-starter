"use client";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import Button from "../buttons/Button";
import TextInput from "./TextInput";

type Inputs = {
  firstName: string;
  lastName: string;

  username: string;
  password: string;
  email: string;
  phone: string;

  address: string;
  designation: string;

  permissions: string[];

  permissionAll: boolean;
};

const SuperAdminCreateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const permissionArray = [
    "User Create",
    "User Update",
    "User Delete",
    "User Read",
  ];

  const permissions = useWatch({
    control,
    name: "permissions",
  });
  // const permissions = watch("permissions");
  console.log("🚀 ~ SuperAdminCreateForm ~ permissions:", permissions);
  if (permissions && permissions.length === permissionArray.length) {
    setValue("permissionAll", true);
  }
  if (permissions && permissions.length < permissionArray.length) {
    setValue("permissionAll", false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="inline-block p-3 mb-5 bg-gray-300 rounded-md font-medium">
        Basic Information
      </span>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TextInput
          {...register("username")}
          label="Username"
          placeholder="Enter your username"
          type="text"
          errors={errors}
        />
        <TextInput
          {...register("password")}
          label="password"
          placeholder="Enter your password"
          type="password"
          errors={errors}
        />
        <TextInput
          {...register("firstName")}
          label="First Name"
          placeholder="Enter your username"
          type="text"
          errors={errors}
        />

        <TextInput
          {...register("lastName")}
          label="Last Name"
          placeholder="Enter your last name"
          type="text"
          errors={errors}
        />
        <TextInput
          {...register("email")}
          label="Email"
          placeholder="Enter your email"
          type="text"
          errors={errors}
        />
        <TextInput
          {...register("phone")}
          label="Phone"
          placeholder="Enter your phone"
          type="text"
          errors={errors}
        />
        <TextInput
          {...register("address")}
          label="Address"
          placeholder="Enter your address"
          type="text"
          errors={errors}
        />
        <TextInput
          {...register("designation")}
          label="Designation"
          placeholder="Enter your designation"
          type="text"
          errors={errors}
        />
      </div>

      <div className="bg-white mt-10 rounded-md p-5">
        <div className="flex justify-between items-center">
          <p className="font-medium">Permissions</p>
          <div className="flex items-center space-x-2">
            <input
              {...register("permissionAll")}
              type="checkbox"
              onChange={(e) => {
                const checked = e.target.checked;
                setValue("permissions", checked ? permissionArray : []);
              }}
            />
            <label className="text-sm"> Permission All</label>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          {permissionArray.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                {...register(`permissions`)}
                type="checkbox"
                value={item}
              />
              <label className="text-sm"> {item}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Button className="mx-auto w-[300px]" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default SuperAdminCreateForm;
