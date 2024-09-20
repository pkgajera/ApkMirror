"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Android from "./categoryWrapper";
import Image from "next/image";
import axios from "axios";
import LoadingComponent from "./Loading";
import Head from "next/head";
import NextScript from "./NextScript";
import Ads from "./Ads";
import MultiplexAds from "./MultiplexAds";

export default function Home() {
  const [value, setValue] = useState('')
  const [popularApps, setPopularApps] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const isAdsServe = JSON.parse(process.env.NEXT_PUBLIC_SERVE_ADS);

  useEffect(() => {
    const getPopulars = async () => {
      setLoading(!isLoading);
      try {
        const response = await axios.get(`/api/get_popular/`);
        if (response && response.status === 200) {
          setPopularApps(response.data.popularApps);
          setPopularGames(response.data.popularGames);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPopulars();
  }, []);
  return (
    <>
      {/* <main className="lg:container flex flex-col items-center justify-between mx-auto"> */}
      <main className="lg:container flex flex-col items-center justify-between mx-5 mt-0.5 sm:mx-0 md:mx-20 lg:mx-auto">
        {/* <main className="flex min-h-screen flex-col items-center justify-between px-5 py-72 lg:px-40 xl:px-52 2xl:px-72"> */}
        <div className="container mx-auto">
          {isAdsServe && <Ads slot={6} className={"mb-5"} />}
          <div className="flex flex-col mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6 text-center">
              Welcome to APKExplorer
            </h1>
            <p className="text-base md:text-xl mb-4 md:mb-8 text-center">
              Fast APK Downloader
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              id="app-search-form"
              className="flex flex-col sm:flex-row justify-center items-center w-full gap-2"
            >
              <input
                type="text"
                name="search"
                className="w-full sm:w-96 p-3 text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // value=""
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                placeholder="Type App name or Package ID"
              />
              <Link
                href={`/app-search#${value}`}
                className="w-full sm:w-auto px-6 py-3 text-center bg-slate-900 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                {/* <button
                  type="submit"
                // className="px-6 py-3 bg-slate-900 text-white uppercase rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 w-full md:w-auto"
            > */}
                Search Apps
                {/* </button> */}
              </Link>
            </form>
          </div>
          <div>
            <div className="p-5 bg-white rounded-md shadow-lg mb-5">
              <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
                Popular Apps
              </h1>
              {isLoading ? (
                <LoadingComponent length={6} lg={3} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
                  {popularApps?.map((app) => (
                    <div
                      key={app.appId}
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
            {isAdsServe && <Ads slot={7} className={"mb-5"} />}
            <div className="p-5 bg-white rounded-md shadow-lg mb-5">
              <h1 className="uppercase mb-2.5 text-lg font-normal tracking text-gray-600">
                Popular Games
              </h1>
              {isLoading ? (
                <LoadingComponent length={6} lg={3} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
                  {popularGames?.map((game) => (
                    <div
                      key={game.appId}
                      className="hover:bg-gray-100 p-1 rounded-md"
                    >
                      <Link
                        href={`/games/appdetails/${game.appId}`}
                        target="_blank"
                        prefetch={false}
                      >
                        <div className="flex">
                          <Image
                            className="rounded-2xl"
                            width={75}
                            height={75}
                            src={game.icon}
                            alt={`${game.title} Icon`}
                          />
                          <div className="ml-2">
                            <h4 className="text-sm font-medium truncate  text-clip">
                              {game.title}
                            </h4>
                            <p className="text-xs text-slate-400 tracking-wider">
                              VERSION {game.latestVersion.split(" ")[0]}
                            </p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">
                              {game.updated}
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
                                {game.scoreText}
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
            {isAdsServe && <Ads slot={8} className={"mb-5"} />}
            <Android name="Apps" />
            {/* {isAdsServe && <Ads slot={9} className={"mb-5"} />}np */}
            <Android name="Games" />
          </div>
        </div>
      </main>
    </>

  );
}