import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const Input = (
  { label, error, errors, onChange, onBlur, name, ...otherProps }: any,
  ref: any
) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
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
