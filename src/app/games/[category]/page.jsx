
import React from "react";
import Category from "@/app/category";
import { androidGames } from "../../Constant/staticData";

const getNameFromCategory = (category) => {
  const foundCategory = androidGames.find(item => item.category === category);
  return foundCategory ? foundCategory.name : null;
};

const Page = ({ params: { category } }) => {
  const categoryName = getNameFromCategory(category);

  return <Category name='games' category={categoryName} />
};

export default Page;
