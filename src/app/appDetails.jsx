"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDownload,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAppDetails } from "./redux/features/appSlice";
import SkeletonDetails from "./SkeletonDetails";

const AppDetails = ({ appId, name, categories }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVersion, setSelectedVersion] = useState({});
  const [foundCategory, setFoundCategory] = useState(null);

  const dispatch = useDispatch();
  const appDetails = useSelector(
    (state) => state.app.appDetail.app?.appDetails
  );
  const appVersions = useSelector(
    (state) => state.app.appDetail.app?.appVersions
  );
  const recentlyUpdatedApps = useSelector(
    (state) => state.app.appDetail.app?.recentlyUpdatedApps
  );
  const similarApps = useSelector(
    (state) => state.app.appDetail.app?.similarApps
  );
  useEffect(() => {
    dispatch(getAppDetails(appId));
  }, [dispatch, appId]);

  useEffect(() => {
    const latestVersionData = appVersions?.versions[1];
    setSelectedVersion(
      latestVersionData ? latestVersionData : appVersions?.versions[0]
    );
    const category = categories.find(
      (item) => item.name === appVersions?.category
    );
    setFoundCategory(category);
  }, [appVersions]);

  const indexOfLastItem = currentPage * 5;
  const indexOfFirstItem = indexOfLastItem - 5;
  const currentItems = appVersions?.versions
    ?.filter((version) => !version.latestVersion)
    .slice(indexOfFirstItem, indexOfLastItem);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOpenIndex(null);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const handleVersionDownload = (version) => {
    setSelectedVersion(version);
    setOpenIndex(null);
  };
  const formatInstalls = (installs) => {
    if (installs >= 1000000000) {
      return Math.floor(installs / 1000000000) + "B+";
    } else if (installs >= 1000000) {
      return Math.floor(installs / 1000000) + "M+";
    } else if (installs >= 1000) {
      return Math.floor(installs / 1000) + "K+";
    } else {
      return installs;
    }
  };
  const formatRatingsAndReviews = (ratings) => {
    if (ratings >= 1000000000) {
      return (Math.floor(ratings / 10000000) / 100).toFixed(1) + "B+";
    } else if (ratings >= 1000000) {
      return (Math.floor(ratings / 10000) / 100).toFixed(1) + "M+";
    } else if (ratings >= 1000) {
      return Math.floor(ratings / 1000) + "K+";
    } else {
      return ratings;
    }
  };
  return (
    <>
      {appDetails && appVersions ? (
        <div className="lg:container flex flex-col items-center justify-between my-72 mx-5 sm:mx-0 md:my-72 md:mx-20 lg:mx-auto">
          <div className="w-full md:px-3.5 justify-center flex flex-col lg:flex-row">
            <main className="lg:w-4/6 xl:w-4/6 relative">
              <div className="mt-3.5 pl-2.5 min-h-5 bg-white rounded-md shadow-md">
                <div className="mb-1 p-3 text-sm font-normal">
                  <p className="text-[10px] sm:text-sm">
                    <Link href={"/"}>Home</Link>&nbsp;/&nbsp;
                    <Link href={`/${name}`}> {name}</Link>&nbsp;/&nbsp;
                    <Link href={`/${name}/${foundCategory?.category}`}>{appVersions.category}</Link>&nbsp;/ <span className="text-slate-500">{appDetails.title}</span>
                  </p>
                  {/* <span className="text-black">
                    <Link
                      href="/"
                      className="py-0.5 px-1 hover:bg-neutral-100"
                      prefetch={false}
                    >
                      Home
                    </Link>
                    <span className="py-0.5 px-2 ">/</span>
                    <Link
                      href={`/${name}`}
                      className="py-0.5 px-1 capitalize hover:bg-neutral-100 "
                      prefetch={false}
                    >
                      Android {name}
                    </Link>
                    <span className="py-0.5 px-2 text-slate-500 ">/</span>
                    <Link
                      href={`/${name}/${foundCategory?.category}`}
                      className="py-0.5 px-1 hover:bg-neutral-100"
                      prefetch={false}
                    >
                      {appVersions.category}
                    </Link>
                    <span className="hidden md:contents py-0.5 px-1 text-slate-500">
                      <span className="py-0.5 px-2 text-slate-500">/</span>
                      {appDetails.title}
                    </span>
                  </span> */}
                </div>
              </div>
              <div className="mt-3.5 ">
                <div className="px-5 pt-5 bg-white rounded-md shadow-md">
                  <div className="mb-3.5">
                    <h1 className="text-2xl text-center md:text-left">
                      {appDetails.title} APK
                    </h1>
                  </div>
                  <div className="px-3.5 w-full flex-col md:flex-row flex md:flex-row">
                    <div className=" justify-center items-center mb-3 md:mb-0">
                      <div className="flex justify-center">
                        <Image
                          className="rounded-3xl"
                          src={appDetails.icon}
                          alt={`${appDetails.title} icon`}
                          width={176}
                          height={176}
                          priority={true}
                        />
                      </div>
                      <div className="text-center p-3">
                        <svg
                          className="w-4 h-4 text-yellow-400 inline"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span> {appDetails.scoreText} / 5</span>
                        <p className="text-gray-400">
                          {" "}
                          {formatRatingsAndReviews(appDetails.ratings)} Ratings
                        </p>
                      </div>
                    </div>
                    <div className="md:w-4/6 pl-5 sm:px-5 ">
                      <div className=" grid grid-cols-3 md:grid-cols-2 gap-x-10 sm:gap-x-2 truncate">
                        <div className="leading-7 text-xs text-slate-400 md:text-right">
                          DEVELOPER
                        </div>
                        <div className="md:col-span-1 col-span-2 leading-7 truncate">
                          <Link href="">{appDetails.developer}</Link>
                        </div>
                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          CURRENT VERSION
                        </div>
                        <div className="md:col-span-1 col-span-2 truncate leading-7">
                          {selectedVersion?.versionNumber}
                        </div>
                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          DATE PUBLISHED
                        </div>
                        <div className="md:col-span-1 col-span-2 leading-7">
                          {selectedVersion?.updated}
                        </div>
                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          FILE SIZE
                        </div>
                        <div className=" md:col-span-1 col-span-2 leading-7">
                          {selectedVersion?.size}
                        </div>
                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          PACKAGE ID
                        </div>
                        <div className="md:col-span-1 col-span-2 truncate leading-7">
                          {appVersions.appId}
                        </div>
                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          DOWNLOADS
                        </div>
                        <div className="md:col-span-1 col-span-2 leading-7">
                          {formatInstalls(appDetails.maxInstalls)}
                        </div>

                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          CATEGORY
                        </div>
                        <div className="md:col-span-1 col-span-2 leading-7">
                          <Link href={`/${name}`} prefetch={false}>
                             {name}
                          </Link>
                        </div>

                        <div className=" leading-7 text-xs text-slate-400 md:text-right">
                          GENRE
                        </div>
                        <div className=" md:col-span-1 col-span-2 leading-7">
                          <Link
                            href={`/${name}/${foundCategory?.category}`}
                            prefetch={false}
                          >
                            {appVersions.category}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-5 px-1.5 py-2.5 bg-neutral-100 rounded-b-md">
                    <div className=" px-4 flex justify-center ">
                      <Link
                        href={`/${name}/appdetails/${appVersions.appId}/${selectedVersion?.versionNumber?.split(" ")[0]
                          }#download`}
                        // target="_blank"
                        className="px-6 py-3 bg-slate-900 text-white uppercase rounded-md hover:bg-slate-700"
                        prefetch={false}
                      >
                        <FontAwesomeIcon className="pr-1" icon={faDownload} />
                        DOWNLOAD APK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {currentItems?.length > 0 ? (
                <div className="mt-5 ">
                  <h2 className="mt-7 text-xl font-normal">
                    <strong>APK</strong> Version History
                  </h2>
                  <div className="mb-5">
                    {currentItems?.map((version, index) => (
                      <React.Fragment key={index}>
                        <div
                          className="mt-2.5 py-4 px-2.5 bg-white rounded-md shadow-md transform origin-center transition duration-200 ease-out"
                          onClick={() => toggleDetails(index)}
                        >
                          <span className="mt-0.5 mr-2.5 pl-1.5 ">
                            <FontAwesomeIcon
                              icon={
                                openIndex !== index ? faAnglesDown : faAnglesUp
                              }
                            />
                          </span>
                          <span className="p-1.5 rounded-md font-bold bg-gray-100">
                            v{version.versionNumber.split(" ")[0]}
                          </span>
                          <button className="p-1 float-right px-4 mr-3.5 bg-slate-900 text-white uppercase rounded-md hover:bg-slate-700">
                            VIEW
                          </button>
                        </div>
                        {openIndex === index && (
                          <div className="p-4 border-t rounded-md border-gray-300 bg-white shadow-md transition-all duration-900 ease-in-out">
                            <div className="w-full bg-gray-100 p-2.5 mb-2.5 px-3.5 flex-col md:flex-row flex md:flex-row transition-all duration-300 ease-in-out">
                              <div className="md:w-4/6 px-3.5 ">
                                <div className=" grid grid-cols-3 md:grid-cols-2 sm:gap-x-2 truncate">
                                  <div className="leading-7 text-xs text-slate-400 md:text-right">
                                    VERSION
                                  </div>
                                  <div className="md:col-span-1 col-span-2 leading-7 truncate">
                                    <Link href="">{version.versionNumber}</Link>
                                  </div>
                                  <div className="leading-7 text-xs text-slate-400 md:text-right">
                                    SIZE
                                  </div>
                                  <div className="md:col-span-1 col-span-2 leading-7 truncate">
                                    <Link href="">{version.size}</Link>
                                  </div>
                                  <div className="leading-7 text-xs text-slate-400 md:text-right">
                                    RELEASE DATE
                                  </div>
                                  <div className="md:col-span-1 col-span-2 leading-7 truncate">
                                    <Link href="">{version.updated}</Link>
                                  </div>
                                  <div className="leading-7 text-xs text-slate-400 md:text-right">
                                    REQUIREMENT
                                  </div>
                                  <div className="md:col-span-1 col-span-2 leading-7 truncate">
                                    <Link href="">
                                      {version.minimum.split("(")[0]}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => handleVersionDownload(version)}
                                className="md:w-4/6 text-center md:mt-10 my-4"
                              >
                                <Link
                                  href={`/apps/appdetails/${appVersions.appId
                                    }#${version.versionNumber.split(" ")[0]}`}
                                  // target="_blank"
                                  className="px-6 py-3 bg-slate-900 text-white uppercase rounded-md  hover:bg-slate-700   "
                                  prefetch={false}
                                >
                                  <FontAwesomeIcon
                                    className="pr-1"
                                    icon={faDownload}
                                  />
                                  DOWNLOAD {version.size}
                                </Link>
                              </button>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex justify-between text-xl items-center ">
                    <div className="px-5">
                      Page{" "}
                      <span className="underline">
                        {" "}
                        {currentPage === 1 ? 1 : 2}
                      </span>{" "}
                      Out Of <span className="underline">{2}</span>
                    </div>
                    <div className="px-5">
                      <button
                        onClick={() => pagination(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex-row  items-center justify-center px-5 mx-2 h-11 leading-tight rounded-s-lg text-gray-500 border border-gray-300 hover:bg-gray-100 ${currentPage === 1
                            ? "bg-gray-100 "
                            : "bg-white hover:text-gray-700"
                          }`}
                      >
                        <FontAwesomeIcon icon={faAnglesLeft} />
                      </button>
                      <button
                        onClick={() => pagination(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(
                            appVersions.versions.filter(
                              (version) => !version.latestVersion
                            ).length / 5
                          )
                        }
                        className={`flex-row items-center justify-center px-5 h-11 leading-tight rounded-e-lg text-gray-500  border border-gray-300 hover:bg-gray-100 ${currentPage ===
                            Math.ceil(
                              appVersions.versions.filter(
                                (version) => !version.latestVersion
                              ).length / 5
                            )
                            ? "bg-gray-100 "
                            : "bg-white hover:text-gray-700"
                          }`}
                      >
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </button>
                    </div>
                  </div>

                  {/* <div className="flex mt-5 text-xl items-center justify-center bg-white rounded-md shadow-md py-5">
                  <button
                    onClick={() => pagination(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex-row  items-center justify-center px-3 h-11 leading-tight rounded-s-lg text-gray-500 border border-gray-300 hover:bg-gray-100 ${
                      currentPage === 1
                        ? "bg-gray-100 "
                        : "bg-white hover:text-gray-700"
                    }`}
                  >
                    Previous
                  </button>
                  <div>
                    {Array.from(
                      {
                        length: Math.ceil(
                          appVersions.versions.filter(
                            (version) => !version.latestVersion
                          ).length / 5
                        ),
                      },
                      (_, i) => {
                        const numPages = Math.ceil(
                          appVersions.versions.filter(
                            (version) => !version.latestVersion
                          ).length / 5
                        );
                        const startPage = Math.max(1, currentPage - 2);
                        const endPage = Math.min(numPages, currentPage + 2);

                        if (
                          i === 0 ||
                          i === numPages - 1 ||
                          (i + 0 >= startPage && i + 2 <= endPage)
                        ) {
                          return (
                            <button
                              key={i}
                              onClick={() => pagination(i + 1)}
                              disabled={currentPage === i + 1}
                              className={`flex-row items-center justify-center px-3 h-11 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                                currentPage === i + 1
                                  ? "bg-gray-100"
                                  : "bg-white"
                              }`}
                            >
                              {i + 1}
                            </button>
                          );
                        } else if (i === 1 || i === numPages - 2) {
                          return (
                            <span className="p-2" key={i}>
                              ...
                            </span>
                          );
                        }
                      }
                    )}
                  </div>

                  <button
                    onClick={() => pagination(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(
                        appVersions.versions.filter(
                          (version) => !version.latestVersion
                        ).length / 5
                      )
                    }
                    className={`flex-row items-center justify-center px-3 h-11 leading-tight rounded-e-lg text-gray-500  border border-gray-300 hover:bg-gray-100 ${
                      currentPage ===
                      Math.ceil(
                        appVersions.versions.filter(
                          (version) => !version.latestVersion
                        ).length / 5
                      )
                        ? "bg-gray-100 "
                        : "bg-white hover:text-gray-700"
                    }`}
                  >
                    Next
                  </button>
                </div> */}
                </div>
              ) : (
                <h2 className="mt-7 text-xl font-normal">
                  There is <strong>NO APK</strong> Version History
                </h2>
              )}

              <div className="my-5 p-5 bg-white rounded-md  shadow-md">
                <div className="my-4 max-w-[95vw] mx-auto ">
                  <div className="relative">
                    <div className="h-500 snap-x overflow-x-auto whitespace-nowrap w-full flex">
                      <Image
                        width={288}
                        height={0}
                        className=" object-contain px-2 bg-gray-100"
                        src={appDetails.headerImage}
                        alt={`${appDetails.title}`}
                      />
                      {appDetails.video && (
                        <div className="p-2 rounded-2xl shadow-lg relative mr-2.5 inline-block  contents">
                          <iframe
                            className="object-contain w-72 py-2 bg-gray-100"
                            src={appDetails.video}
                            title="YouTube video"
                          />
                        </div>
                      )}
                      {appDetails.screenshots?.map((url, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-2xl shadow-lg relative mr-2.5 inline-block contents"
                        >
                          <Image
                            width={288}
                            height={0}
                            className="px-1 ml-px snap-center object-contain py-1 bg-gray-200"
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
                <div className="p-2 description-container max-w-full overflow-x-auto ">
                  {showFullDescription ? (
                    <div className="max-h-full transition-all duration-500 ease-in-out">
                      <p className="whitespace-pre-wrap">
                        {appDetails.description}
                      </p>
                      <button
                        className="mt-2 font-medium text-blue-600 hover:underline dark:text-blue-500"
                        onClick={() => setShowFullDescription(false)}
                      >
                        Hide
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="line-clamp-3 whitespace-pre-wrap">
                        {appDetails.description}
                      </p>
                      <button
                        className={`mt-2 font-medium ${appDetails.description?.length < 400
                            ? "text-gray-400 hover:line-through"
                            : "text-blue-600 hover:underline dark:text-blue-500"
                          }`}
                        onClick={toggleDescription}
                        disabled={appDetails.description?.length < 400}
                      >
                        Read More...
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </main>
            <aside className=" sm:w-auto lg:w-2/6 lg:px-3.5 ">
              <SideBar sideappDetails={similarApps} header="SIMILAR APPS" />
              <SideBar sideappDetails={recentlyUpdatedApps} header="RECENTLY UPDATED APPS" />
            </aside>
          </div>
        </div>
      ) : (
        <SkeletonDetails/>
      )}
    </>
  );
};

export default AppDetails;
