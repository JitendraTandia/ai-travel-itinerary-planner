import React from "react";

const TabNavBar = () => {
  const pathName = window.location.pathname.toLowerCase();
  console.log(pathName);
  return (
    <div className="lg:fixed md:fixed xl:fixed  hidden  bottom-10 left-1/2 w-fit  shadow-2xl backdrop-blur-md bg-[#29292984]  rounded-full -translate-x-1/2">
      <div className=" bg-background overflow-x-auto">
        <nav className="flex justify-start md:justify-center gap-5 p-2">
          {["Planning", "People", "Schedule", "Budget", "Booking"].map(
            (item) => (
              <div
                // onClick={() => {
                //   navigate(`/${item}`);
                // }}
                key={item}
                className={`text-white cursor-pointer hover:text-black hover:font-bold rounded-full  hover:bg-white py-2 px-5 whitespace-nowrap ${
                  pathName.includes(item.toLowerCase()) && "bg-white text-black"
                }`}
              >
                {item}
              </div>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default TabNavBar;
