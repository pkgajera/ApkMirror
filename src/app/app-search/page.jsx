'use client'
import React from "react";
import Android from "../categoryWrapper";


const Search = () => {
  return (
       <main className="flex min-h-screen flex-col items-center justify-between p-28">
        <div className="col-md-12 flex items-center flex-col">
          <h1 className="text-2xl  mb-2 md:mb-6 text-center">
          Search Android Apps with Fast APK Downloader
          </h1>
          <section id="app-search" className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
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
      <div className="p-10 w-full">
      <Android name="Apps"/>
      <Android name="Games"/>
    </div>
    </main>
  );
};

export default Search;
