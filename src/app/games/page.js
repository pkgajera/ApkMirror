"use client";
import Link from "next/link";
import Android from "../categoryWrapper";
import Image from "next/image";
import SideBar from "../SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../Loading";
import Ads from "../Ads";

const Games = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [androidGames, setAndroidGames] = useState([]);
  const [recentlyUpdatedAppsAndGames, setRecentlyUpdatedAppsAndGames] =
    useState([]);
  const isAdsServe = JSON.parse(process.env.NEXT_PUBLIC_SERVE_ADS);

  useEffect(() => {
    const getAndroidGames = async () => {
      try {
        const response = await axios.get(`/api/get_apps_games?type=game`);
        if (response && response.status === 200) {
          setAndroidGames(response.data.AndroidData);
          setRecentlyUpdatedAppsAndGames(
            response.data.recentlyUpdatedAppsAndGames
          );
          setIsLoading(false);
        }
      } catch (errors) {
        console.error(errors);
      }
    };
    getAndroidGames();
  }, []);
  return (
    <>
      <main className="lg:container flex flex-col items-center justify-between my-20 mx-5 sm:mx-0 md:mx-20 lg:mx-auto">
        {/* <main className="flex min-h-screen flex-col items-center justify-between py-72 px-5 lg:px-40 xl:px-52 2xl:px-72"> */}
        <div className="container mx-auto max-w-screen-xl">
          {isAdsServe && <Ads slot={15} className={""} />}
          <div className="w-full md:px-3.5 justify-center flex flex-col lg:flex-row">
            <main className="lg:w-4/6 xl:w-4/6 mt-4 relative">
              <div className="mb-3.5 p-3 bg-white rounded-md shadow-md">
                <p><Link href={"/"}>Home</Link> / <span className="text-slate-500">Android Games</span></p>
              </div>
              <Android name="Games" />
              {isAdsServe && <Ads slot={16} className={"mb-4"} />}
              <div className="p-5 bg-white rounded-md shadow-lg mb-5">
                <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
                  Android Games
                </h1>
                {isLoading ? (
                  <LoadingComponent length={6} />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-4">
                    {androidGames?.map((app, index) => (
                      <div
                        key={index}
                        className="hover:bg-gray-100 p-1 rounded-md"
                      >
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
                            />
                            <div className="ml-2">
                              <h4 className="text-sm font-medium">{app.title}</h4>
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
                )}
              </div>
            </main>
            <aside className=" sm:w-auto lg:w-2/6 lg:px-3.5 ">
              <SideBar sideappDetails={recentlyUpdatedAppsAndGames} isLoading={isLoading} />
              {isAdsServe && <Ads slot={17} className={"mb-5"} />}
              {isAdsServe && <Ads slot={18} className={""} />}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Games;
