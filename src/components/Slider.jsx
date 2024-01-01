import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function Slider() {
  const { state, setState } = useContext(UserContext);

  const handleClick = () => {
    setState(false);
  };
  return (
    <ul
      className={`${
        state ? "block" : "hidden"
      }  w-[42%] relative no-underline float-right z-10  bg-blue-500  md:hidden top-[6.2rem] rounded-xl shadow-2xl`}
    >
      <li className="p-[5rem] border-b-2 border-b-zinc-800 uppercase font-semibold text-4xl hover:text-white text-gray-900">
        <Link to={""} onClick={handleClick}>
          Home
        </Link>
      </li>
      <li className="p-[5rem] border-b-2 border-b-zinc-800 uppercase font-semibold text-4xl hover:text-white text-gray-900">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="p-[5rem] border-b-2 border-b-zinc-800 uppercase font-semibold text-4xl hover:text-white text-gray-900">
        <Link to={"/projects"}>Project</Link>
      </li>
      <li className="p-[5rem]  uppercase font-semibold text-4xl hover:text-white text-gray-900">
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}

export default Slider;
