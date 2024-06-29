"use client";
import AppDetails from "@/app/appDetails";
import React from "react";

const Page = ({params}) => {
  console.log(params);
  return (
    <>
   <AppDetails appId={params.appId} name='apps'/>
    </>

  );
};

export default Page;
