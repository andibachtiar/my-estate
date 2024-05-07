import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Route } from "react-router-dom";

export default function Header() {
  const inputRef = useRef(null);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">My</span>
            <span className="text-red-700">Estate</span>
          </h1>
        </Link>

        <form
          action=""
          className="flex justify-between items-center bg-slate-50 rounded p-2.5 space-x-2"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="search..."
            className="w-28 rounded focus:outline-none sm:w-64"
          />
          <FaSearch
            className="hover:cursor-pointer"
            onClick={(e) => inputRef.current.focus()}
          />
        </form>
        <ul className="flex space-x-3 font-medium">
          <Link to="/home">
            <li className="hidden sm:inline text-slate-500 hover:underline hover:cursor-pointer hover:text-slate-700">
              Home
            </li>
          </Link>
          <Link to="about">
            <li className="hidden sm:inline text-slate-500 hover:underline hover:cursor-pointer hover:text-slate-700">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="text-slate-500 hover:underline hover:cursor-pointer hover:text-slate-700">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
