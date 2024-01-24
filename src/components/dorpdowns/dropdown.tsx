import { useState } from "react";

const Dropdown = ({ children }) => {
	const [open, setOpen] = useState(false)
	const handleClick  = () => setOpen(!open)
	return <div>{ children(handleClick, open)}</div>;
};

export default Dropdown;
