"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    setShowSearch(!pathName.includes("/app-search"));
  }, [pathName]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const onHandleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              APKExplorer
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              aria-controls="navbar-search"
              aria-expanded={isMenuOpen}
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6h14M3 10h14m-7 4h7"
                  />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-search"
          >
            {/* {showSearch && (
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  value={searchTerm}
                  onChange={onHandleChange}
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search App"
                />
              </div>
            )} */}

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-transform: uppercase border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                    ${pathName === "/" && "md:text-blue-700 decoration-blue-700"}
                 `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                     ${pathName.includes("/apps") && "md:text-blue-700 focus:ring-violet-300 decoration-blue-700"}
                  `}
                >
                  Android Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathName.includes("/games") && "md:text-blue-700 decoration-blue-700"
                  }`}
                >
                  Android Games
                </Link>
              </li>
              <li>
                <Link
                  href="/app-search"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathName.includes("/app-search") && "md:text-blue-700 decoration-blue-700"
                  }`}
                >
                  Search Apps & Games
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
