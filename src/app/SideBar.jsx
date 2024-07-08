import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = ({sideappDetails,header="RECENTLY UPDATED APPS"}) => {
  return (
    <div className="my-3.5 p-5 bg-white rounded-md shadow-md ">
    <h2 className="mb-2.5 font-normal text-slate-500 tracking-wider uppercase">
      {header}
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-1">
      {sideappDetails?.map((appDetails, index) => (
        <Link
          href=""
          key={index}
          className="mt-2.5 p-1.5 hover:bg-gray-100 p-1 rounded-md"
        >
          <div className=" grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <Image
              width={75}
              height={75}
              className="rounded-2xl"
              src={appDetails.IMG}
              alt={`${appDetails.NAME} Icon`}
            />
            <div className="ml-2 col-span-2 ">
              <h4 className="text-sm font-medium">{appDetails.NAME}</h4>
              <p className="text-xs text-slate-400 tracking-wider">
                VERSION {appDetails.CURRENT_VERSION}
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                {appDetails.DATE_PUBLISHED}
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
                <p className="text-sm font-bold text-slate-400 dark:text-white">
                  4.95
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default SideBar;
