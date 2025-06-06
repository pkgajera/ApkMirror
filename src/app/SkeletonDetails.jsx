import React from 'react';
import LoadingComponent from './Loading';

const SkeletonDetails = () => {
    return (
        <main className="lg:container flex flex-col items-center justify-between mt-0.5 mx-5 sm:mx-0 md:mx-20 lg:mx-auto">
            <div className="lg:container flex flex-col items-center justify-between mt-0.5 mx-5 sm:mx-0 md:mx-20 lg:mx-auto">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="w-full justify-center flex flex-wrap">
                        <main className="w-full xl:w-4/6 mt-4 relative px-0 xl:px-2">
                            <div className="mb-3.5 p-5 bg-white rounded-lg shadow-md flex flex-col">

                                <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 p-4">

                                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                                        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                            </svg>
                                        </div>
                                        <div className="w-full">
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                        </div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-5 p-5 bg-white rounded-md shadow-md">

                                <div id="indicators-carousel" className="relative w-full">


                                    <div role="status" className="flex items-center justify-center h-56  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-5 p-5 bg-white rounded-md shadow-md">
                                <div role="status" className=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </main>
                        <aside className=" sidebar-container w-full xl:w-2/6 xl:px-2">
                            <div className="my-3.5 p-5 bg-white rounded-md shadow-md ">  <LoadingComponent length={4} md={1} lg={1} /></div>

                            <div className="my-3.5 p-5 bg-white rounded-md shadow-md ">  <LoadingComponent length={4} md={1} lg={1} /></div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SkeletonDetails;
