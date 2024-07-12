"use client";
import React, { useState } from "react";
import Android from "../categoryWrapper";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Search = () => {
  const path = usePathname();
  const [searchName, setSearchName] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const [data, setData] = useState([
    {
      appId: "com.contextlogic.wish",
      developer: "Wish Inc.",
      icon: "https://play-lh.googleusercontent.com/_xe3xo56GsweS0su2J2FTrbfKa0SCbjP0QZ9VPIayWlk6QrGaNy1K4qNzc5Waf8Jr_Xp",
      latestVersion: "24.22.0 (2678)",
      score: "4.7",
      title: "Wish: Shop and Save",
      updated: "June 12, 2024",
    },
    {
      appId: "com.todoist",
      developer: "Doist Inc.",
      icon: "https://play-lh.googleusercontent.com/GK0SwEBVqlFBpRkPjY6y_1go6E6xZzAN0Ivzfgbuf28J4TTOoOsgWnqR4oJ_RhIhsg",
      latestVersion: "v11450 (11450)",
      score: "4.4",
      title: "Todoist: to-do list & planner",
      updated: "June 11, 2024",
    },
    {
      appId: "com.free.unlimited.lemon.vpn",
      developer: "Fruit Security Studio",
      icon: "https://play-lh.googleusercontent.com/foWmKfP6t72sXhGbHUe27QH_kERQ1bW-dvVZHRlxhIQCHDhsWGPAhNu0TocyPWY0BOMm",
      latestVersion: "5.1.261 (51261)",
      score: "4.0",
      title: "3X VPN - Smooth Browsing",
      updated: "June 12, 2024",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchToggle(!searchToggle);
  };
  console.log(path);
  return (
    <main className="flex min-h-screen flex-col items-center p-28">
      <div className="col-md-12 flex items-center flex-col">
        <h1 className="text-2xl  mb-2 md:mb-6 text-center">
          Search Android Apps with Fast APK Downloader
        </h1>
        <section
          id="app-search"
          className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4"
        >
          <form
            onSubmit={handleSubmit}
            id="app-search-form"
            className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full"
          >
            <input
              type="text"
              name="search"
              className="p-3 w-full md:w-96 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4 md:mb-0"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              required
              placeholder="Type App name or Package ID"
            />
            
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 text-white uppercase rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 w-full md:w-auto"
            >
              Search Apps
            </button>
          </form>
        </section>
      </div>
      {searchToggle ? (
        <div className="p-5 bg-white rounded-md shadow-lg my-5">
          <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
            Search Results for "{searchName}"
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data?.map((app) => (
              <div key={app.appId} className="hover:bg-gray-100 p-1 rounded-md">
                <Link
                  href={`/apps/appdetails/${app.appId}`}
                  target="_blank"
                  prefetch={false}
                >
                  <div className="flex">
                    <Image
                      className="rounded-2xl"
                      width={75}
                      height={75}
                      src={app.icon}
                      alt={`${app.title} Icon`}
                      priority={true}
                    />
                    <div className="ml-2">
                      <h4 className="text-sm font-medium">{app.title}</h4>
                      <p className="text-xs text-slate-400 tracking-wider">
                        VERSION {app.latestVersion.split(" ")[0]}
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {app.updated}
                      </p>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-400 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="text-sm font-bold text-slate-400 dark:text-white">
                          {app.score}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-10 w-full">
          <Android name="Apps" />
          <Android name="Games" />
        </div>
      )}
    </main>
  );
};

export default Search;
