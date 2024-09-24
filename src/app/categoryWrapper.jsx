import Link from "next/link";
import { androidApps, androidGames } from "./Constant/staticData";

const Android = ({ name }) => {
  const categories = name === "Apps" ? androidApps : androidGames;

  return (
    <div className="mb-3.5 p-5 bg-white rounded-md shadow-md flex flex-col">
      <h2 className="mb-2.5 text-base font-normal text-slate-500 uppercase tracking-wider">
        {name} Categories
      </h2>
      <div className="block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {categories.slice().reverse().map((data, index) => (
            <Link
              key={index}
              className="max-w-52 max-h-12 p-1 text-sm font-normal relative float-left rounded-md hover:bg-gray-100"
              href={`/${name.toLowerCase()}/${data.category}`}
              prefetch={false}
            >
              <div className="flex items-center">
                <span className="text-lg m-1 w-7 h-7 inline-block leading-7 text-center">
                  <i className={data.icon} />
                </span>
                <span className="py-2.5 inline-block w-4/4">{data.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Android;
