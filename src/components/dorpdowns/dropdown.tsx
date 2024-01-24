import { ReactNode, useState } from "react";

const Dropdown = ({ children }: { children: (handleClick: () => void, open: boolean) => ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return <div>{children(handleClick, open)}</div>;
};

export default Dropdown;
