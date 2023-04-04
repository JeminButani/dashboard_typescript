import React, { useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Sort,
  Toolbar,
  Filter,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

// import { employeesData, employeesGrid } from "../data/dummy";
import { driverGrid } from "../data/meiroData";
import { Header } from "../components";

const Drivers = ({ data }) => {
  const toolbarOptions = ["Search", "ExcelExport"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [driverData, setDriverData] = useState([]);

  let grid;
  const toolbarClick = (args) => {
    if (grid && args.item.id === "grid_excelexport") {
      const excelExportProperties = {
        fileName: "DriverDetails.xlsx",
      };
      grid.excelExport(excelExportProperties);
    }
  };
  const FilterOptions = {
    type: "Menu",
  };

  const TotalTrips = (trips) => {
    var total = 0;
    trips.forEach((element) => {
      total += 1;
    });
    return total;
  };

  const TotalRevenue = (trips) => {
    var total = 0;
    trips.forEach((element) => {
      total = total + Number(element.revenue);
    });
    return total;
  };

  function numberFormat(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  useEffect(() => {
    var dvr_data = [];
    var srno = 1;
    data.forEach((e) => {
      const temp = {};
      temp.srno = srno;
      temp.did = Number(e.did);
      temp.name = e.fname + " " + e.lname;
      temp.dlno = e.dlno;
      temp.bdate = String(e.bdate).slice(0, 10);
      temp.working = e.working ? "Working" : "Not Working";
      temp.trips = TotalTrips(e.trips);
      temp.revenue = "₹ " + numberFormat(TotalRevenue(e.trips));
      dvr_data.push(temp);
      srno += 1;
    });
    setDriverData(dvr_data);
  }, [data]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Driver Details List" />
      <GridComponent
        id="grid"
        dataSource={driverData}
        width="auto"
        allowPaging
        allowSorting={true}
        allowFiltering={true}
        pageSettings={{
          pageCount: 5,
        }}
        editSettings={editing}
        toolbar={toolbarOptions}
        filterSettings={FilterOptions}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {driverGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Sort, Toolbar, Filter, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Drivers;
