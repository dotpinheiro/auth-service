import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root';
import Users from './pages/root/users';
import Settings from "./pages/root/settings";
import Permissions from "./pages/root/permissions";
import Auth from "./pages/auth";
import Rbac from "./pages/root/permissions/rbac";
import RbacRoles from "./pages/root/permissions/rbac/rbac-roles";
import RbacPermissions from "./pages/root/permissions/rbac/rbac-permissions";


export const baseRoutes = [
  {
    path: "/users",
    name: "Users",
    element: <Users/>
  },
  {
    path: "/settings",
    name: "Settings",
    element: <Settings/>
  },
  {
    path: "/rbac",
    name: "Permissions",
    element: <Permissions/>,
    children: [
      {
        path: "/rbac/rbac",
        name: "RBAC",
        element: <Rbac/>,
        children: [
          {
            path: "/rbac/rbac/roles",
            name: "Roles",
            element: <RbacRoles/>
          },
          {
            path: "/rbac/rbac/rbac",
            name: "Permissions",
            element: <RbacPermissions/>
          }
        ]
      }
    ]
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: baseRoutes
  },
  {
    path: "/auth",
    element: <Auth/>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
