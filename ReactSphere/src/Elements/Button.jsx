import { NavLink } from "react-router"
import bgHeader from "../../public/bgHeader.jpg"

export const Button = ({ to = "", text = "Write Here", className = "", ...props }) => {
  let baseClasses = "py-4 px-5 rounded-xl  text-(--MAIN) bg-cover"
  return (
    <NavLink to={to} className={`${baseClasses} ${className}`}
      style={{ backgroundImage: `url(${bgHeader})` }} {...props}>
      {text}
    </NavLink>
  )}
