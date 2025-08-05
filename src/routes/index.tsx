import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import User from "../pages/Users.tsx";
import Tasks from "../pages/Tasks.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                index: true,
                // path: "tasks",
                Component: Tasks,
            },
            {
                path: "tasks",
                Component: Tasks,
            },
            {
                path: "users",
                Component: User,
            }
            
        ]
    }
])

export default router;