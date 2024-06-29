"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AppDetails = () => {
  const [data, setData] = useState([
    {
      NAME: "TikTok",
      IMG: "https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
      DEVELOPER: "TikTok Pte. Ltd.",
      CURRENT_VERSION: "12.2.23",
      DATE_PUBLISHED: "April 19, 2024",
      FILE_SIZE: "44.1 MB",
      PACKAGE_ID: "com.tiktok.tv",
      PRICE: "$ 0.00",
      DOWNLOADS: "1.7M+",
      CATEGORY: "Android Apps",
      GENRE: "Social",
      headerImage:
        "https://play-lh.googleusercontent.com/k55CQpaf55jp0sdEiheKPymCrWiNvUqi4IK-Ak-Ji5IjWtcqxTzKDI50lD8zY3jK5ds=h475-rw",
      video: "",
      description:
        "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.",
      IMGS: [
        "https://play-lh.googleusercontent.com/mdeshtKk62VaiaMVjeZN4qjpa9_sCowIMfkXYtINptcFfPkFGoJfjMP1rLndbr35zw=h475-rw",
        "https://play-lh.googleusercontent.com/mdeshtKk62VaiaMVjeZN4qjpa9_sCowIMfkXYtINptcFfPkFGoJfjMP1rLndbr35zw=h475-rw",
        "https://play-lh.googleusercontent.com/mdeshtKk62VaiaMVjeZN4qjpa9_sCowIMfkXYtINptcFfPkFGoJfjMP1rLndbr35zw=h475-rw",
      ],
      VERSIONS: [
        {
          VERSION: "34.9.1 (2023409010)",
          ARCHITECTURE: "arm64-v8a,armeabi-v7a",
          RELEASE_DATE: "May 21, 2024",
          REQUIREMENT: "Android 5.0+",
        },
        {
          VERSION: "34.8.4 (2023408040)",
          ARCHITECTURE: "arm64-v8a,armeabi-v7a",
          RELEASE_DATE: "May 21, 2024",
          REQUIREMENT: "Android 5.0+",
        },
        {
          VERSION: "34.8.3 (2023409010)",
          ARCHITECTURE: "arm64-v8a",
          RELEASE_DATE: "May 21, 2024",
          REQUIREMENT: "Android 5.0+",
        },
        {
          VERSION: "34.8.2 (2023409010)",
          ARCHITECTURE: "arm64-v8a,armeabi-v7a",
          RELEASE_DATE: "May 21, 2024",
          REQUIREMENT: "Android 5.0+",
        },
        {
          VERSION: "34.8.1 (2023408040)",
          ARCHITECTURE: "arm64-v8a,armeabi-v7a",
          RELEASE_DATE: "May 21, 2024",
          REQUIREMENT: "Android 5.0+",
        },
      ],
    },
  ]);
  const [sideData, setSideData] = useState([
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
      <div className="pt-20 px-4 mx-auto xl:w-1170 lg:w-970">
        <div className="w-full md:px-3.5 justify-center flex flex-col md:flex-row">
          {data?.map((val, index) => (
            <main key={index} className="md:w-4/6 px-3.5">
              <div className="mt-3.5 pl-2.5 min-h-5 bg-white rounded-sm shadow-md">
                <div className="mb-1 py-2 px-3.5 text-sm font-normal">
                  <span className="text-black">
                    <Link href="/" className="py-0.5 px-1 hover:bg-neutral-100">
                      Home
                    </Link>
                    <span className="py-0.5 px-2 ">/</span>
                    <Link
                      href="/apps"
                      className="py-0.5 px-1 hover:bg-neutral-100"
                    >
                      Android Apps
                    </Link>
                    <span className="py-0.5 px-2 text-slate-500 ">/</span>
                    <Link href="" className="py-0.5 px-1 hover:bg-neutral-100">
                      {val.GENRE}
                    </Link>
                    <span className="hidden md:contents py-0.5 px-1 text-slate-500">
                      <span className="py-0.5 px-2 text-slate-500">/</span>
                      {val.NAME}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-3.5">
                <div className="px-5 pt-5 bg-white rounded-sm shadow-md">
                  <div className="mb-3.5">
                    <h1 className="text-2xl text-center md:text-left">
                      {val.NAME} APK
                    </h1>
                  </div>
                  <div className="px-3.5 w-full flex-col md:flex-row flex md:flex-row">
                    <div className="flex justify-center items-center mb-3 md:mb-0">
                      <img
                        className="w-44 h-44 rounded-3xl"
                        src={val.IMG}
                        alt={`${val.NAME} Icon`}
                      />
                    </div>
                    <div className="md:w-4/6 px-5 ">
                      <div className="flex">
                        <div className="w-32  leading-7 text-xs   text-slate-400  md:text-right">
                          DEVELOPER
                        </div>
                        <div className=" md:pl-3 leading-7 ">
                          <Link href="">{val.DEVELOPER}</Link>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          CURRENT VERSION
                        </div>
                        <div className=" md:pl-3 leading-7">
                          {val.CURRENT_VERSION}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          DATE PUBLISHED
                        </div>
                        <div className=" md:pl-3 leading-7">
                          {val.DATE_PUBLISHED}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          FILE SIZE
                        </div>
                        <div className=" md:pl-3  leading-7">
                          {val.FILE_SIZE}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          PACKAGE ID
                        </div>
                        <div className=" md:pl-3  leading-7">
                          {val.PACKAGE_ID}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          PRICE
                        </div>
                        <div className=" md:pl-3  leading-7">{val.PRICE}</div>
                      </div>
                      <div className="flex">
                        <div className="w-32 leading-7 text-xs  text-slate-400 md:text-right">
                          DOWNLOADS
                        </div>
                        <div className=" md:pl-3  leading-7">
                          {val.DOWNLOADS}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32  leading-7 text-xs  text-slate-400 md:text-right">
                          CATEGORY
                        </div>
                        <div className=" md:pl-3  leading-7">
                          <Link href="">{val.CATEGORY}</Link>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32  leading-7 text-xs  text-slate-400 md:text-right">
                          GENRE
                        </div>
                        <div className=" md:pl-3  leading-7">
                          <Link href="">{val.GENRE}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-5 px-1.5 py-2.5 bg-neutral-100 ">
                    <div className="md:w-5/12 my-3 px-4 flex justify-center">
                      <a className="py-3 px-5 bg-black text-white text-center">
                        <FontAwesomeIcon className="pr-1" icon={faDownload} />
                        DOWNLOAD APK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="mt-7 text-xl font-normal">
                  <strong>APK</strong> Version History
                </h2>
                <div className="mb-5 ">
                  {val.VERSIONS?.map((ver, index) => (
                    <React.Fragment key={index}>
                      <div
                        className="mt-2.5 py-4 px-2.5 bg-white shadow-md transition-all ease-in"
                        onClick={() => toggleDetails(index)}
                      >
                        <a className="mt-0.5 mr-2.5 pl-1.5 ">
                          <FontAwesomeIcon
                            icon={
                              openIndex !== index ? faAnglesDown : faAnglesUp
                            }
                          />
                        </a>
                        <a className="p-1.5 rounded-sm font-bold bg-gray-100">
                          v{ver.VERSION.split("(")[0]}
                        </a>
                        <a className="p-1 float-right rounded px-4 mr-3.5 bg-black text-white">
                          VIEW
                        </a>
                      </div>
                      {openIndex === index && (
                        <div className="p-4 border-t border-gray-300 bg-white shadow-md transition-all duration-900 ease-in-out">
                          <div className="w-full bg-gray-100 p-2.5 mb-2.5 px-3.5 flex-col md:flex-row flex md:flex-row">
                            <div className="md:w-4/6 px-3.5">
                              <div className="flex">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  VERSION
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <a>{ver.VERSION}</a>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  ARCHITECTURE
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <a>{ver.ARCHITECTURE}</a>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  RELEASE DATE
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <a>{ver.RELEASE_DATE}</a>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="w-20  leading-7 text-xs   text-slate-400  md:text-right">
                                  REQUIREMENT
                                </div>
                                <div className=" md:pl-3 pl-5 leading-7 ">
                                  <a>{ver.REQUIREMENT}</a>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-4/6 px-3.5 text-center md:mt-10 my-4">
                              <a className="py-3 px-5 bg-slate-800 text-white text-center">
                                <FontAwesomeIcon
                                  className="pr-1"
                                  icon={faDownload}
                                />
                                DOWNLOAD
                              </a>
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
                        src={val.headerImage}
                        alt={data.title}
                      />
                      {val.video && (
                        <div className="p-2 rounded-2xl shadow-lg relative mr-2.5 inline-block px-2 py-1 bg-gray-100">
                          <iframe
                            height="450"
                            src={val.headerImage}
                            title="YouTube video"
                            allowFullScreen
                            style={{ borderRadius: "1rem" }}
                          />
                        </div>
                      )}
                      {val.IMGS?.map((url, index) => (
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
                    <p className="text-justify">{val.description}</p>
                  ) : (
                    <p className="line-clamp-3 text-justify">
                      {val.description}
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
          ))}
          <aside className="md:w-2/6 px-3.5  md:mt-0">
            <div className="my-3.5 p-5 bg-white rounded-sm shadow-md">
              <h2 className="mb-2.5 font-normal text-slate-500 tracking-wider">
                SIMILAR APPS
              </h2>
              {sideData?.map((data, index) => (
                <a key={index} className="mt-2.5 p-1.5 ">
                  <div className="flex ">
                    <img
                      className="w-75 h-75 rounded-2xl"
                      src={data.IMG}
                      alt={`${data.NAME} Icon`}
                    />
                    <div className="ml-2">
                      <h4 className="text-sm font-medium">{data.NAME}</h4>
                      <p className="text-xs text-slate-400 tracking-wider">
                        VERSION {data.CURRENT_VERSION}
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {data.DATE_PUBLISHED}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
