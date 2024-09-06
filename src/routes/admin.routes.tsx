import { Children } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name : 'User Management',
    Children : [
        {
            name : "create-student",
            path : "/admin/create-student",
            element : <CreateStudent />
        },
        {
            name : "create-admin",
            path : "/admin/create-admin",
            element : <CreateAdmin />
        },
        {
            name : "create-faculty",
            path : "/admin/create-faculty",
            element : <CreateFaculty />
        }
    ]
  },
];

export const adminPath = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
];
