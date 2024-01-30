import cn from "@/libs/cn";
import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Input = (
  { label, errors, onChange, onBlur, name, className = "", ...otherProps }: any,
  ref: any
) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className={cn("", className)}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        {...otherProps}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <small className="block text-sm font-medium text-red-700">
            {message}
          </small>
        )}
      />
    </div>
  );
};

const TextInput = forwardRef(Input);

export default TextInput;
