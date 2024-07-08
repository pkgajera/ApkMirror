"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Versions = ({ appVersions }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedVersion, setSelectedVersion] = useState(appVersions.versions.find((version)=>version.latestVersion))
   

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appVersions.versions?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="mt-5">
        <h2 className="mt-7 text-xl font-normal">
          <strong>APK</strong> Version History
        </h2>
        <div className="mb-5 ">
          {currentItems?.map((version, index) => (
            !version.latestVersion?
            <React.Fragment key={index}>
              <div
                className="mt-2.5 py-4 px-2.5 bg-white shadow-md transform origin-center "
                onClick={() => toggleDetails(index, version)}
              >
                <span className="mt-0.5 mr-2.5 pl-1.5 ">
                  <FontAwesomeIcon
                    icon={openIndex !== index ? faAnglesDown : faAnglesUp}
                  />
                </span>
                <span className="p-1.5 rounded-sm font-bold bg-gray-100">
                  v{version.versionNumber.split(" ")[0]}
                </span>
                <span className="p-1 float-right rounded px-4 mr-3.5 bg-slate-600 text-white">
                  VIEW
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-300 bg-white shadow-md transition-all duration-900 ease-in-out">
                  <div className="w-full bg-gray-100 p-2.5 mb-2.5 px-3.5 flex-col md:flex-row flex md:flex-row transition-all duration-300 ease-in-out">
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
                      <Link
                        href={`/apps/appdetails/${appVersions.appId}#${
                          version.versionNumber.split(" ")[0]
                        }`}
                        // target="_blank"
                        // onClick={() => setSelectedVersion(index)}
                        className="py-3 px-5 bg-slate-800 text-white text-center"
                      >
                        <FontAwesomeIcon className="pr-1" icon={faDownload} />
                        DOWNLOAD {version.size}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
            : null
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
                length: Math.ceil(appVersions.versions?.length / itemsPerPage),
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
              Math.ceil(appVersions.versions?.length / itemsPerPage)
            }
            className={`flex-row items-center justify-center px-3 h-8 leading-tight rounded-e-lg text-gray-500 border-e-0 border border-gray-300 hover:bg-gray-100   ${
              currentPage ===
              Math.ceil(appVersions.versions?.length / itemsPerPage)
                ? "bg-gray-100 "
                : "bg-white hover:text-gray-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Versions;
