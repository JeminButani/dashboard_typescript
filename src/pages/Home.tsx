import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Button, LineChart, SparkLine } from "../components";
import {
  recentTransactions,
  dropdownData,
  SparklineAreaData,
} from "../data/dummy";
import { earningData } from "../data/meiroData";
import { useStateContext } from "../contexts/ContextProvider";


const Home = ({ data }: any) => {
  const { currentColor, currentMode } = useStateContext();

  const total_drivers = data.length;
  var total_revenue = 0;
  function numberFormat(x : string) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  var total_trips = 0;
  data.forEach((element: any) => {
    const temp = element.trips;
    temp.forEach((e: any) => {
      total_revenue = total_revenue + Number(e.revenue);
      total_trips += 1;
    });
  });


  const buttonProps = {
    color: "white",
    bgColor: currentColor,
    
    borderRadius: "10px",
    icon: undefined,
    bgHoverColor: "",
    size: "",
    width: undefined
  }

  const buttonProps1={
    ...buttonProps,
    text: "Download Report",
  }
  const buttonProps2 = {
    ...buttonProps,
    text: "Add",
  }

  // const dropDownStyle: React.CSSProperties = {
  //   border: "none",
  //   color: currentMode === "Dark" ? "white" : ""
  // }


  const DropDown = () => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent
        id="time"
        fields={{ text: "Time", value: "Id" }}
        style={{ border: "none", color: currentMode === "Dark" ? "white" : "" }}
        value="1"
        dataSource={dropdownData}
        popupHeight="220px"
        popupWidth="120px"
      />
    </div>
  );

  return (
    <div className="mt-10 ">
      <div className="flex flex-wrap   lg:flex-nowrap  justify-center">
        <div className="flex m-3 flex-wrap justify-center  gap-1 items-center w-full">
          {earningData.map((item) => (
            <div
              key={item.title}
              //   style={{ width: "30%" }}
              className="bg-white flex w-full justify-center lg:w-1/4  h-44 dark:text-gray-200 dark:bg-secondary-dark-bg p-5 pt-9 rounded-2xl "
            >
              <div
                className="text-4xl lg:text-6xl "
                style={{ color: item.iconColor }}
              >
                {item.icon}
                <p className="text-xl lg:text-2xl text-gray-400  mt-1">
                  {item.title}
                </p>
              </div>
              <p className="m-3 flex justify-center">
                <span className="text-lg lg:text-3xl font-semibold">
                  {item.title === "Total Drivers" && total_drivers}
                  {item.title === "Total Revenue" &&
                    "₹" + numberFormat(String(total_revenue))}
                  {item.title === "Total Trips" && numberFormat(String(total_trips))}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  prop={buttonProps1}
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                prop={buttonProps2} />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};




export default Home;


