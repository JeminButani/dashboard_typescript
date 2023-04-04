import { FiHome, FiEdit, FiPieChart } from "react-icons/fi";
import {
  AiOutlineCalendar,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyRupee,
} from "react-icons/bs";
import { GiLouvrePyramid } from "react-icons/gi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiHome />,
      },
    ],
  },

  {
    title: "Driver",
    links: [
      {
        name: "driversList",
        icon: <IoMdContacts />,
      },
      //   {
      //     name: "customers",
      //     icon: <RiContactsLine />,
      //   },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "10,354",
    percentage: "-4%",
    title: "Total Drivers",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(0, 194, 146)",
    pcColor: "red-600",
  },
  {
    icon: <BsCurrencyRupee />,
    amount: "2,40,396",
    percentage: "+23%",
    title: "Total Revenue",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(0, 194, 146)",
    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Total Trips",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(0, 194, 146)",
    pcColor: "red-600",
  },
];

export const driverGrid = [
  { field: "srno", headerText: "Sr no.", width: "100", textAlign: "Center" },

  { field: "did", headerText: "Driver Id", width: "150", textAlign: "Center" },
  {
    field: "name",
    headerText: "Name",
    width: "200",
    textAlign: "start",
  },
  {
    field: "dlno",
    headerText: "License No.",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "bdate",
    headerText: "Birth Date",
    width: "120",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "working",
    headerText: "Work Status",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "trips",
    headerText: "Total Trips",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "revenue",
    headerText: "Total Revenue",
    width: "120",
    textAlign: "Center",
  },
];
