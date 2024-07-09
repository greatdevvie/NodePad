import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: ":id",
        action: (({ params }) => {
            let header = params.header,
            
        })
    },
]);