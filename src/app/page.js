"use client";
import Link from "next/link";
import React from "react";
import Android from "./categoryWrapper";

export default function Home() {
  const data =[
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28">
      <div className="container mx-auto">
        <div className="col-md-12 flex items-center flex-col mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6 text-center">
            Welcome to APKExplorer
          </h1>
          <p className="text-base md:text-xl mb-4 md:mb-8 text-center">
            Fast APK Downloader
          </p>
          <section
            id="app-search"
            className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              id="app-search-form"
              className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full"
            >
              <input
                type="text"
                name="search"
                className="p-3 w-full md:w-96 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4 md:mb-0"
                value=""
                required
                readOnly
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
        <div className="p-5 bg-white rounded-md shadow-lg mb-5">
          <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
            Popular Apps
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data?.map((val, index) => (
              <div key={index} className="hover:bg-gray-100 p-1 rounded-md">
                <Link href="">
                  <div className="flex">
                    <img
                      className="w-75 h-75 rounded-2xl"
                      src={val.IMG}
                      alt={`${val.NAME} Icon`}
                    />
                    <div className="ml-2">
                      <h4 className="text-sm font-medium">{val.NAME}</h4>
                      <p className="text-xs text-slate-400 tracking-wider">
                        VERSION {val.CURRENT_VERSION}
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {val.DATE_PUBLISHED}
                      </p>
                      <div class="flex items-center">
                        <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="text-sm font-bold text-slate-400 dark:text-white">4.95</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 bg-white rounded-md shadow-lg mb-5">
          <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
            Popular Games
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data?.map((val, index) => (
              <div key={index} className="hover:bg-gray-100 p-1 rounded-md">
                <Link href="">
                  <div className="flex">
                    <img
                      className="w-75 h-75 rounded-2xl"
                      src={val.IMG}
                      alt={`${val.NAME} Icon`}
                    />
                    <div className="ml-2">
                      <h4 className="text-sm font-medium">{val.NAME}</h4>
                      <p className="text-xs text-slate-400 tracking-wider">
                        VERSION {val.CURRENT_VERSION}
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {val.DATE_PUBLISHED}
                      </p>
                      <div class="flex items-center">
                        <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="text-sm font-bold text-slate-400 dark:text-white">4.95</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Android name="Apps" />
        <Android name="Games" />
      </div>
    </main>
  );
}
