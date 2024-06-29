import React from "react";
import Category from "@/app/category";
import { androidApps } from "../../Constant/staticData";

const getNameFromCategory = (category) => {
  const foundCategory = androidApps.find(item => item.category === category);
  return foundCategory ? foundCategory.name : null;
};

const Page = ({ params: { category } }) => {
  const categoryName = getNameFromCategory(category);

  return <Category name='apps' category={categoryName} />
};

export default Page;
