import cn from "@/libs/cn";

const Button = ({ children, className = "", ...otherProps }) => {
  return (
    <button
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-md text-white flex justify-center items-center space-x-1",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
