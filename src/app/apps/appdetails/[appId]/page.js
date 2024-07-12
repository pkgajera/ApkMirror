"use client";
import { androidApps } from "@/app/Constant/staticData";
import AppDetails from "@/app/appDetails";
import React from "react";

const Page = ({params}) => {
  return (
    <>
   <AppDetails appId={params.appId} name="apps" categories={androidApps}/>
    </>

  );
};

export default Page;
