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
  PageSettingsModel,
  EditSettingsModel,
  Grid,
  FilterSettingsModel,
  ToolbarItems,
  ExcelExportProperties
} from "@syncfusion/ej2-react-grids";

// import { employeesData, employeesGrid } from "../data/dummy";
import { driverGrid } from "../data/meiroData";
import { Header } from "../components";
import { ClickEventArgs } from "@syncfusion/ej2-react-navigations";



const Drivers = ({ data }: any) => {

  type DriverDataType = {
    did: Number,
    fname: String,
    lname: String,
    bdate: Date,
    dlno: String,
    working: Boolean,
    trips: [
      {
        tid: Number,
        stime: Date,
        etime: Date,
        sloc: [],
        eloc: [],
        revenue: Number,
        city: {
          id: String,
          name: String,
          state: String,
        },
      },
    ],
  
  };
  type DriverDataType2 = {
    srno?: Number,
    did?: Number,
    name?: String,
    bdate?: String,
    dlno?: String,
    working?: String,
    trips?: Number,
  }[];
  
  const toolbarOptions: ToolbarItems[] = ["Search", "ExcelExport"];
  const editing: EditSettingsModel = { allowDeleting: true, allowEditing: true };
  const [driverData, setDriverData] = useState<DriverDataType2>([]);
  const pageSettings: PageSettingsModel = { pageSize: 10, pageCount: 5 }
  const filterOptions: FilterSettingsModel = { type: "Menu" }

  let grid: Grid | null;
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === "grid_excelexport") {
      const excelExportProperties: ExcelExportProperties = {
        fileName: "DriverDetails.xlsx",
      };
      grid.excelExport(excelExportProperties);
    }
  };

  type tripType = {
    tid: Number,
    stime: Date,
    etime: Date,
    sloc: [],
    eloc: [],
    revenue: Number,
    city: {
      id: String,
      name: String,
      state: String,
    },
  }

  type dataGridType = {
    field: string;
    headerText: string;
    width: string;
    textAlign: string;
    format?: undefined;
  } | {
    field: string;
    headerText: string;
    width: string;
    format: string;
    textAlign: string;
  }


  const TotalTrips = (trips: tripType[]) => {
    var total = 0;
    trips.forEach((element: tripType) => {
      total += 1;
    });
    return total;
  };

  const TotalRevenue = (trips: tripType[]) => {
    var total = 0;
    trips.forEach((element: tripType) => {
      total = total + Number(element.revenue);
    });
    return total;
  };

  function numberFormat(x: string) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res: string = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  useEffect(() => {
    var dvr_data: object[] = [];
    var srno: number = 1;
    data.forEach((e: DriverDataType) => {
      const temp: { srno: number, did: number, name: string, dlno: string, bdate: string, working: string, trips: number, revenue: string } = {
        srno: srno,
        did: Number(e.did),
        name: e.fname + " " + e.lname,
        dlno: String(e.dlno),
        bdate: String(e.bdate).slice(0, 10),
        working: e.working ? "Working" : "Not Working",
        trips: TotalTrips(e.trips),
        revenue: "₹ " + numberFormat(String(TotalRevenue(e.trips))),
      };
      dvr_data.push(temp);
      srno += 1;
    });
    setDriverData(dvr_data);
    console.log(dvr_data);
  }, [data]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Driver Details List" />
      <GridComponent
        id="grid"
        dataSource={driverData}
        width="auto"
        allowPaging={true}
        allowSorting={true}
        allowFiltering={true}
        pageSettings={pageSettings}
        editSettings={editing}
        toolbar={toolbarOptions}
        filterSettings={filterOptions}
        allowExcelExport={true}
        // toolbarClick={toolbarClick}
        ref={g => grid = g}
      >
        <ColumnsDirective>
          {driverGrid.map((item : dataGridType, index : any) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Sort, Toolbar, Filter, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Drivers;
