import Link from "next/link";
import Android from "../categoryWrapper";

const Apps = () => {
  return (
    <>
     <div className="p-20 mt-5">
        <div className="lg:w-4/6 xl:w-4/6 lg:mx-20 relative">
          <div className="mb-3.5 pl-2.5 bg-white rounded-md shadow-md">
            <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row py-2 pr-3.5">
              <li className="block text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="block text-slate-500">
                <span>/ Android Apps</span>
              </li>
            </ul>
          </div>
          <Android name="Apps"/>
        </div>
      </div>
    </>
  );
};

export default Apps;
