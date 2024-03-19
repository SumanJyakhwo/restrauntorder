import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Customer from "./pages/dashboard/customer";
import Vendor from "./pages/dashboard/vendor";
import Product from "./pages/dashboard/product";
import Table from "./pages/dashboard/table";
import Mainscreen from "./pages/dashboard/mainscreen";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Products",
        path: "/product",
        element: <Product />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Customers",
        path: "/customer",
        element: <Customer />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Vendors",
        path: "/vendor",
        element: <Vendor />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Tables",
        path: "/table",
        element: <Table />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Menu",
        path: "/menu",
        element: <Mainscreen />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
