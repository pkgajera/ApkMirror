'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from "next/link";
import Image from "next/image";
import SideBar from "./SideBar";
import LoadingComponent from "./Loading";
import Ads from "./Ads";

const Category = ({ name, category }) => {
  const [categoryApps, setCategoryApps] = useState([]);
  const [recentlyUpdatedApps, setRecentlyUpdatedApps] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAdsServe = JSON.parse(process.env.NEXT_PUBLIC_SERVE_ADS);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const parseCategory = encodeURIComponent(category);
        const response = await axios.get(`/api/get_by_category?category=${parseCategory}`);
        if (response && response.status === 200) {
          setCategoryApps(response.data.apps);
          setRecentlyUpdatedApps(response.data.recentlyUpdatedApps);
        } else {
          setCategoryApps([]);
        }
      } catch (errors) {
        console.error(errors);
        setError("An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [category]);
  return (
    // <div className="p-20 mt-5 flex">
    <>
      <div className="lg:container flex flex-col items-center justify-between mt-0.5 mx-5 sm:mx-0 md:mx-20 lg:mx-auto">
        <div className="container mx-auto max-w-screen-xl">
          {/* <div className="flex min-h-screen flex-col  items-center justify-between px-5 py-72 lg:px-40 xl:px-52 2xl:px-72"> */}
          {isAdsServe && <Ads slot={1} className={"mb-3"} />}
          <div className="w-full justify-center flex flex-wrap">
            <main className="w-full xl:w-4/6 mt-4 relative px-0 xl:px-2">
              <div className="mb-3.5 p-3 bg-white rounded-md shadow-md">
                <p className="text-[10px] sm:text-sm">
                  <Link href={"/"}>Home</Link>&nbsp;/&nbsp;
                  <Link href={`${name}`}>Android {name}</Link>&nbsp;/&nbsp;
                  <span className="text-slate-500">{category}</span>
                </p>
                {/* <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row py-2 pr-3.5">
            <li className="block text-black">
              <Link href="/" className="hover:bg-gray-200 rounded-md p-1">Home</Link>
            </li>
            <li className="block text-black">
              <span>/</span>
              <Link href={`/${name}`} className="hover:bg-gray-200 rounded-md p-1"> Android {name}</Link>
            </li>
            <li className="block text-slate-500">
              <span>/</span>
              <span className="capitalize pl-1">{category}</span>
            </li>
          </ul> */}
              </div>
              <div className="mb-3.5 p-5 bg-white rounded-lg shadow-md flex flex-col">
                <h2 className="mb-2.5 text-base font-normal text-slate-500 uppercase tracking-wider">
                  {category} ANDROID {name}
                </h2>
                {isLoading ? <LoadingComponent length={6} /> : <div>
                  {categoryApps && categoryApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {categoryApps.map((app) => (
                        <div key={app.appId} className="hover:bg-gray-100 p-1 rounded-md">
                          <Link href={`/${name}/appdetails/${app.appId}`}
                            target="_blank"
                            prefetch={false}
                          >
                            <div className="flex truncate">
                              <Image
                                className="rounded-2xl"
                                src={app.icon}
                                alt={`${app.title} Icon`}
                                width={96}
                                height={96}
                              />
                              <div className="ml-2">
                                <h4 className="text-md font-medium">{app.title}</h4>
                                <p className="text-xs text-slate-400 tracking-wider">
                                  DEVELOPER {app.developer}
                                </p>
                                <p className="text-xs text-slate-400 tracking-wider">
                                  VERSION {app.latestVersion}
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
                                  <p className="text-sm font-bold text-slate-400 dark:text-slate-400">
                                    {app.scoreText}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center text-lg font-bold text-slate-400 dark:text-white">
                      No data found for this category: {category}
                    </div>
                  )}
                </div>}

              </div>
              {isAdsServe && <Ads slot={2} className={"mt-6"} />}
            </main>
            <aside className=" sidebar-container w-full xl:w-2/6 xl:px-2">
              <SideBar sideappDetails={recentlyUpdatedApps} isLoading={isLoading} />
              {isAdsServe && <Ads slot={3} className={""} />}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
