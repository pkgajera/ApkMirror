"use client";
import Versions from "@/app/versions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DownloadVersions = ({ appId, versionId, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [appDetails, setAppDetails] = useState([]);
  const [appVersions, setAppVersions] = useState([]);
  const [downloadSelectedVersion, setDownloadSelectedVersion] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  // const [selectedVersion, setSelectedVersion] = useState({});
  // const handleDownload = async () => {
  //   setIsLoading(true);
  //   setIsDownloaded(false);

  //   const response = await axios.get(downloadSelectedVersion.actualLink);
  //   console.log(response,'6522');
  //   const blob = await response.blob();
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = downloadSelectedVersion.actualLink.split("/").pop(); // Use the filename from the URL
  //   document.body.appendChild(a);
  //   a.click();
  //   a.remove();
  //   window.URL.revokeObjectURL(url);

  //   setIsLoading(false);
  //   setIsDownloaded(true);
  // };
  // console.log(isLoading,isDownloaded);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appVersions.versions
    ?.filter((version) => !version.latestVersion)
    .slice(indexOfFirstItem, indexOfLastItem);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOpenIndex(null);
  };

  useEffect(() => {
    const getappDetails = async () => {
      try {
        const response = await axios.get(`/api/app_by_name_id?appId=${appId}`);
        if (response && response.status === 200) {
          setAppDetails(response.data.app.appDetails);
          setAppVersions(response.data.app.appVersions);
          setDownloadSelectedVersion(
            response.data.app.appVersions.versions.find((version) =>
              version.versionNumber.includes(versionId) ? version : null
            )
          );
          setIsLoading(false);
        }
      } catch (errors) {
        console.error(errors);
      }
    };
    getappDetails();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="px-7 py-3 text-lg font-medium leading-none text-center text-dark-800 bg-gray-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        </div>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between py-28 px-5 lg:px-40 xl:px-52 2xl:px-72">
          <div className="container mx-auto">
            <div className=" justify-center item-center px-5 pt-5 bg-white rounded-sm shadow-md">
              <div className=" flex xl:flex-row flex-col justify-center item-center">
                <h1 className="text-center text-xl font-medium">
                  {appDetails.title}{" "}
                  {downloadSelectedVersion.versionNumber.split(" ")[0]}
                </h1>
                <span className="text-center leading-8 pl-2">
                  [{downloadSelectedVersion.size}]
                </span>
              </div>
              {isDownloaded ? (
                <div className="p-3.5 ">
                  <div className="p-5 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-500 mx-auto"></div>
                  <div className="pt-5 text-center absolutetext-lg">
                    Download{" "}
                    <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
                      .
                    </span>
                    <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
                      .
                    </span>
                    <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
                      .
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-5">
                  <p className="text-center text-lg">
                    If you want to download then click
                  </p>
                  <div className="flex justify-center py-5">
                    <span className="animate-bounce rounded-full bg-slate-200 h-10 w-10 absolute text-center text-3xl">
                      {"\u2193"}
                    </span>
                  </div>
                  <div className="flex justify-center pt-10">
                    <button
                      className="px-6 py-3 bg-slate-900 text-white uppercase rounded-lg hover:bg-slate-700"
                      onClick={() => setIsDownloaded(!isDownloaded)}
                    >
                      <Link
                        href={downloadSelectedVersion.actualLink}
                        className="py-3 px-5 "
                      >
                        <FontAwesomeIcon className="pr-1" icon={faDownload} />
                        DOWNLOAD {downloadSelectedVersion.size}
                      </Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* <Versions appVersions={appVersions}/> */}
            {currentItems.length > 0 && (
              <div className="mt-5">
                <h2 className="mt-7 text-xl font-normal">
                  <strong>APK</strong> Version History
                </h2>
                <div className="mb-5 ">
                  {currentItems?.map((version, index) => (
                    <React.Fragment key={index}>
                      <div
                        className="mt-2.5 py-4 px-2.5 bg-white  shadow-md transform origin-center transition duration-200 ease-out"
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
                          v{version.versionNumber.split(" ")[0]}
                        </span>
                        <span className="p-1 float-right px-4 mr-3.5 bg-slate-900 text-white uppercase rounded-lg hover:bg-slate-700">
                          VIEW
                        </span>
                      </div>
                      {openIndex === index && (
                        <div className="p-4 border-t border-gray-300 bg-white shadow-md ">
                          <div className="w-full bg-gray-100 p-2.5 mb-2.5 px-3.5 flex-col md:flex-row flex md:flex-row">
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
                            <button
                              onClick={() =>
                                setDownloadSelectedVersion(version)
                              }
                              className="md:w-4/6 px-3.5 text-center md:mt-10 my-4"
                            >
                              <Link
                                href={`/${name}/appdetails/${
                                  appVersions.appId
                                }/${
                                  version.versionNumber.split(" ")[0]
                                }#download`}
                                // target="_blank"
                                className="px-6 py-3 bg-slate-900 text-white uppercase rounded-lg hover:bg-slate-700"
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
                <div className="flex mt-5 items-center justify-center">
                  <button
                    onClick={() => pagination(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex-row items-center justify-center px-3 h-8 leading-tight rounded-s-lg text-gray-500 border-s-0 border border-gray-300 hover:bg-gray-100   ${
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
                          ).length / itemsPerPage
                        ),
                      },

                      (_, i) => (
                        <button
                          key={i}
                          onClick={() => pagination(i + 1)}
                          disabled={currentPage === i + 1}
                          className={`flex-row items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${
                            currentPage === i + 1 ? "bg-gray-100" : "bg-white"
                          }`}
                        >
                          {i + 1}
                        </button>
                      )
                    )}
                  </div>
                  <button
                    onClick={() => pagination(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(
                        appVersions.versions.filter(
                          (version) => !version.latestVersion
                        ).length / itemsPerPage
                      )
                    }
                    className={`flex-row items-center justify-center px-3 h-8 leading-tight rounded-e-lg text-gray-500 border-e-0 border border-gray-300 hover:bg-gray-100   ${
                      currentPage ===
                      Math.ceil(
                        appVersions.versions.filter(
                          (version) => !version.latestVersion
                        ).length / itemsPerPage
                      )
                        ? "bg-gray-100 "
                        : "bg-white hover:text-gray-700"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default DownloadVersions;
