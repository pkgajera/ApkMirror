"use client";
import Link from "next/link";
import Android from "../categoryWrapper";
import Image from "next/image";
import SideBar from "../SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../Loading";

const Games = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [androidGames, setAndroidGames] = useState([]);
  const [recentlyUpdatedAppsAndGames, setRecentlyUpdatedAppsAndGames] =
    useState([]);

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
    <main className="flex min-h-screen flex-col  items-center justify-between p-10 md:p-28">
            <div className="container mx-auto max-w-screen-xl">
        <div className="w-full md:px-3.5 justify-center flex flex-col lg:flex-row">
          <main className="lg:w-4/6 xl:w-4/6 mt-4 relative">
            <div className="mb-3.5 pl-2.5 bg-white rounded-md shadow-md">
              <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row py-2 pr-3.5">
                <li className="block text-black">
                  <Link href="/">Home</Link>
                </li>
                <li className="block text-slate-500">
                  <span>/ Android Games</span>
                </li>
              </ul>
            </div>
            <Android name="Games" />
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
            <SideBar sideappDetails={recentlyUpdatedAppsAndGames} isLoading={isLoading}/>
          </aside>
        </div>
      </div>
    </main>
    </>
  );
};

export default Games;
