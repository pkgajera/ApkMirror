"use client";
import AppDetails from "@/app/appDetails";
import React from "react";

const Page = ({params}) => {
  return (
    <>
   <AppDetails appId={params.appId} name='games'/>
    </>

  );
};

export default Page;
