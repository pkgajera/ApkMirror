"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";

const AppDetails = ({ appId , name}) => {
  const [isLoading, setLoading] = useState(true);
  const [sideappDetails, setSideappDetails] = useState([
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
  ]);
  const [appDetails, setAppDetails] = useState([]);
  const [appVersions, setAppVersions] = useState([]);
  useEffect(() => {
    const getappDetails = async () => {
      try {
        const response = await axios.get(`/api/app_by_name_id?appId=${appId}`);
        if (response && response.status === 200) {
          setAppDetails(response.data.app.appDetails);
          setAppVersions(response.data.app.appVersions);
          setLoading(false);
        }
      } catch (errors) {
        console.error(errors);
      }
    };
    getappDetails();
  }, []);
  console.log(appDetails);
  console.log(appVersions);
  const [openIndex, setOpenIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
     {isLoading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="px-7 py-3 text-lg font-medium leading-none text-center text-dark-800 bg-gray-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        </div>
        ) : (
      <div className="pt-20 px-4 mx-auto xl:w-1170 lg:w-970">
       
          <div className="w-full md:px-3.5 justify-center flex flex-col md:flex-row">
            <main className="md:w-4/6 px-3.5">
              <div className="mt-3.5 pl-2.5 min-h-5 bg-white rounded-sm shadow-md">
                <div className="mb-1 py-2 px-3.5 text-sm font-normal">
                  <span className="text-black">
                    <Link href="/" className="py-0.5 px-1 hover:bg-neutral-100">
                      Home
                    </Link>
                    <span className="py-0.5 px-2 ">/</span>
                    <Link
                      href={`/${name}`}
                      className="py-0.5 px-1 capitalize hover:bg-neutral-100"
                    >
                      Android {name}
                    </Link>
                    <span className="py-0.5 px-2 text-slate-500 ">/</span>
                    <Link href={`/${name}/${appVersions.category}`} className="py-0.5 px-1 hover:bg-neutral-100">
                      {appVersions.category}
                    </Link>
                    <span className="hidden md:contents py-0.5 px-1 text-slate-500">
                      <span className="py-0.5 px-2 text-slate-500">/</span>
                      {appDetails.title}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-3.5">
                <div className="px-5 pt-5 bg-white rounded-sm shadow-md">
                  <div className="mb-3.5">
                    <h1 className="text-2xl text-center md:text-left">
                      {appDetails.title} APK
                    </h1>
                  </div>
                  <div className="px-3.5 w-full flex-col md:flex-row flex md:flex-row">
                    <div className=" justify-center items-center mb-3 md:mb-0">
                      <img
                        className="w-44 h-44 rounded-3xl"
                        src={appDetails.icon}
                        alt={`${appDetails.title} Icon`}
                      />
                      <div className="text-center p-3">
                      <svg
                              className="w-4 h-4  text-yellow-300 inline"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span>  {appDetails.scoreText} / 5</span>
                            <p className="text-gray-400">  {appDetails.ratings} Ratings</p>
                      </div>
                    </div>
                    <div className="md:w-4/6 px-5 ">
                      <div className="flex">
                      <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                                DEVELOPER
                        </div>
                        <div className=" md:pl-3 leading-7 truncate">
                          <Link href="">{appDetails.developer}</Link>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          CURRENT VERSION
                        </div>
                        <div className=" md:pl-3 leading-7">
                          {appVersions.versions[0].versionNumber}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          DATE PUBLISHED
                        </div>
                        <div className=" md:pl-3 leading-7">
                          {appVersions.versions[0].updated}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          FILE SIZE
                        </div>
                        <div className=" md:pl-3  leading-7">
                          {appVersions.versions[0].size}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          PACKAGE ID
                        </div>
                        <div className=" md:pl-3 truncate leading-7">
                          {appVersions.appId}
                        </div>
                      </div>
                        <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          DOWNLOADS
                        </div>
                        <div className=" md:pl-3  leading-7">
                          {appDetails.maxInstalls}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32  leading-7 text-xs  text-slate-400 md:text-right">
                          CATEGORY
                        </div>
                        <div className=" md:pl-3  leading-7">
                          <Link href="/apps">Android {name}</Link>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32  leading-7 text-xs  text-slate-400 md:text-right">
                          GENRE
                        </div>
                        <div className=" md:pl-3  leading-7">
                          <Link href="">{appVersions.category}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-5 px-1.5 py-2.5 bg-neutral-100  ">
                    <div className=" my-3 px-4 flex justify-center">
                      <Link href='' className="py-3 px-5 bg-slate-600 text-white text-center">
                        <FontAwesomeIcon className="pr-1" icon={faDownload} />
                        DOWNLOAD APK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="mt-7 text-xl font-normal">
                  <strong>APK</strong> Version History
                </h2>
                <div className="mb-5 ">
                  {appVersions.versions?.map((version, index) => (
                    <React.Fragment key={index}>
                      <div
                        className="mt-2.5 py-4 px-2.5 bg-white shadow-md transition-all ease-in"
                        onClick={() => toggleDetails(index)}
                      >
                        <span className="mt-0.5 mr-2.5 pl-1.5 ">
                          <FontAwesomeIcon
                            icon={
                              openIndex !== index ? faAnglesDown : faAnglesUp
                            }
                          />
                        </span>
                        <span className="p-1.5 rounded-sm font-bold bg-gray-100">
                          v{version.versionNumber.split("(")[0]}
                        </span>
                        <span className="p-1 float-right rounded px-4 mr-3.5 bg-slate-600 text-white">
                          VIEW
                        </span>
                      </div>
                      {openIndex === index && (
                        <div className="p-4 border-t border-gray-300 bg-white shadow-md transition-all duration-900 ease-in-out">
                          <div className="w-full bg-gray-100 p-2.5 mb-2.5 px-3.5 flex-col md:flex-row flex md:flex-row ">
                            <div className="md:w-4/6 px-3.5 ">
                              <div className="flex gap-2 ">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  VERSION
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <p>{version.versionNumber}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  SIZE
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <p>{version.size}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="  leading-7 text-xs   text-slate-400  md:text-right">
                                  RELEASE DATE
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <p>{version.updated}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  REQUIREMENT
                                </div>
                                <div className=" md:pl-3 pl-5 truncate  leading-7 ">
                                  <p>{version.minimum.split("(")[0]}</p>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-4/6 px-3.5 text-center md:mt-10 my-4">
                              <Link href='' className="py-3 px-5 bg-slate-800 text-white text-center">
                                <FontAwesomeIcon
                                  className="pr-1"
                                  icon={faDownload}
                                />
                                DOWNLOAD
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="my-5 p-5 bg-white rounded-sm shadow-md">
                <div className="my-4 max-w-[95vw] mx-auto ">
                  <div className="relative">
                    <div className="h-1/2 overflow-x-auto whitespace-nowrap w-full flex">
                      <img
                        className="object-contain px-2 bg-gray-100"
                        src={appDetails.headerImage}
                        alt={appDetails.title}
                      />
                      {appDetails.video && (
                        <div className="">
                          <iframe
                            height="450"
                            src={appDetails.video}
                            title="YouTube video"
                            allowFullScreen
                            style={{ borderRadius: "1rem" }}
                          />
                        </div>
                      )}
                      {appDetails.screenshots?.map((url, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-2xl shadow-lg relative mr-2.5 inline-block contents"
                        >
                          <img
                            className="px-2 py-1 bg-gray-200"
                            src={url}
                            alt={`Image ${index}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mx-5 px-1.5 py-2.5 bg-neutral-100 text-center font-semibold">
                  <h2>DESCRIPTION</h2>
                </div>
                <div className="p-2">
                  {showFullDescription ? (
                    <p className="text-justify">{appDetails.description}</p>
                  ) : (
                    <p className="line-clamp-3 text-justify">
                      {appDetails.description}
                    </p>
                  )}
                  {!showFullDescription ? (
                    <button
                      className="bg-none text-blue-500 mt-2"
                      onClick={toggleDescription}
                    >
                      Show More...
                    </button>
                  ) : (
                    <button
                      className="bg-none text-blue-500 mt-2"
                      onClick={() => setShowFullDescription(false)}
                    >
                      Hide
                    </button>
                  )}
                </div>
              </div>
            </main>
            <aside className="md:w-2/6 px-3.5  md:mt-0">
              <div className="my-3.5 p-5 bg-white rounded-sm shadow-md">
                <h2 className="mb-2.5 font-normal text-slate-500 tracking-wider">
                  SIMILAR APPS
                </h2>
                {sideappDetails?.map((appDetails, index) => (
                  <Link href='' key={index} className="mt-2.5 p-1.5 ">
                    <div className="flex ">
                      <img
                        className="w-24 h-24 rounded-2xl"
                        src={appDetails.IMG}
                        alt={`${appDetails.NAME} Icon`}
                      />
                      <div className="ml-2">
                        <h4 className="text-sm font-medium">
                          {appDetails.NAME}
                        </h4>
                        <p className="text-xs text-slate-400 tracking-wider">
                          VERSION {appDetails.CURRENT_VERSION}
                        </p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">
                          {appDetails.DATE_PUBLISHED}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
       
      </div>
       )}
    </>
  );
};

export default AppDetails;
