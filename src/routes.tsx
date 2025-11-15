import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            { path: "more-projects", element: <Projects /> }
        ]
    },
])
export default router;