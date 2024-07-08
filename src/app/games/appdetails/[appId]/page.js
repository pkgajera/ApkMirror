"use client";
import { androidGames } from "@/app/Constant/staticData";
import AppDetails from "@/app/appDetails";
import React from "react";

const Page = ({params}) => {
  return (
    <>
   <AppDetails appId={params.appId} name='games' categories={androidGames}/>
    </>

  );
};

export default Page;

